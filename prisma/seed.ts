import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const countries: { code: string; name: string; photo: string; points: number }[] =
  require('./countries.js');

const ORGANIZATION_CODES = new Set(['eu', 'un']);
const CITY_CODES = new Set(['hk', 'mo']);
const TERRITORY_CODES = new Set([
  'ai', 'aq', 'as', 'aw', 'ax', 'bl', 'bm', 'bq', 'bv', 'cc', 'ck', 'cw', 'cx',
  'fk', 'fo', 'gf', 'gg', 'gi', 'gl', 'gp', 'gs', 'gu', 'hm', 'im', 'io', 'je',
  'ky', 'mf', 'mp', 'mq', 'ms', 'nc', 'nf', 'nu', 'pf', 'pm', 'pn', 'pr', 're',
  'sh', 'sj', 'sx', 'tc', 'tf', 'tk', 'um', 'vg', 'vi', 'wf', 'yt',
]);

function getFlagType(code: string): string {
  if (code.startsWith('us-')) return 'state';
  if (ORGANIZATION_CODES.has(code)) return 'organization';
  if (CITY_CODES.has(code)) return 'city';
  if (TERRITORY_CODES.has(code)) return 'territory';
  return 'country';
}

const FLAGS_CATEGORY_ID = 'bbc41ba6-6277-44f8-be95-05bae4f683e1';

const DIFFICULTIES = [
  { points: 200, label: 'Easy' },
  { points: 400, label: 'Medium' },
  { points: 600, label: 'Hard' },
];

const QUESTIONS_PER_DIFFICULTY = 3;

async function seedFlags() {
  const flagsCategory = await prisma.category.findUnique({ where: { id: FLAGS_CATEGORY_ID } });
  if (!flagsCategory) {
    console.log('⏭️  Flags category not found in DB — skipping');
    return;
  }

  await prisma.question.deleteMany({ where: { categoryId: FLAGS_CATEGORY_ID } });
  console.log('🗑️  Cleared existing questions for Flags category');

  for (const country of countries) {
    const flagType = getFlagType(country.code);
    await prisma.question.create({
      data: {
        categoryId: FLAGS_CATEGORY_ID,
        text: `Name this ${flagType}`,
        fileUrl: country.photo,
        fileType: 'image',
        answer: country.name,
        answerFileUrl: country.photo,
        answerFileType: 'image',
        points: country.points,
      },
    });
    console.log(`✅ Flags: ${country.name} (${flagType})`);
  }
}

async function seedAllCategories() {
  const categories = await prisma.category.findMany({
    where: { id: { not: FLAGS_CATEGORY_ID } },
  });

  console.log(`\n📂 Found ${categories.length} non-flags categories`);

  for (const category of categories) {
    // must remove game_question references before deleting questions (FK RESTRICT)
    await prisma.gameQuestion.deleteMany({ where: { categoryId: category.id } });
    await prisma.question.deleteMany({ where: { categoryId: category.id } });

    const rows: { categoryId: string; text: string; answer: string; points: number }[] = [];

    for (const { points, label } of DIFFICULTIES) {
      for (let i = 1; i <= QUESTIONS_PER_DIFFICULTY; i++) {
        rows.push({
          categoryId: category.id,
          text: `[${label} #${i}] ${category.name} — question ${i}`,
          answer: `[${label} #${i}] ${category.name} — answer ${i}`,
          points,
        });
      }
    }

    await prisma.question.createMany({ data: rows });

    console.log(
      `✅ "${category.name}" — ${rows.length} questions (${QUESTIONS_PER_DIFFICULTY}×200 / ${QUESTIONS_PER_DIFFICULTY}×400 / ${QUESTIONS_PER_DIFFICULTY}×600)`,
    );
  }
}

async function main() {
  await seedFlags();
  await seedAllCategories();
  console.log('\n✅ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
