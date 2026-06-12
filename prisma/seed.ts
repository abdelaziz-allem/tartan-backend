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

async function main() {
  const categoryId = 'bbc41ba6-6277-44f8-be95-05bae4f683e1';

  await prisma.question.deleteMany({ where: { categoryId } });
  console.log('🗑️  Cleared existing questions for category');

  for (const country of countries) {
    const flagType = getFlagType(country.code);
    await prisma.question.create({
      data: {
        categoryId,
        text: `Name this ${flagType}`,
        fileUrl: country.photo,
        fileType: 'image',
        answer: country.name,
        answerFileUrl: country.photo,
        answerFileType: 'image',
        points: country.points,
      },
    });
    console.log(`✅ Created question for ${country.name} (${flagType})`);
  }

  console.log('✅ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
