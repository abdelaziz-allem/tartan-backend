import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

interface GeneralQuestion {
  text: string;
  answer: string;
  points: number;
}

async function main() {
  const generalCategoryId = '67c7b354-4b14-4be7-af90-819e8f024b4e';

  const raw = fs.readFileSync(path.join(__dirname, 'general.json'), 'utf-8');
  const questions: GeneralQuestion[] = JSON.parse(raw);

  console.log(`📦 Seeding ${questions.length} general questions...`);

  for (const q of questions) {
    await prisma.question.create({
      data: {
        categoryId: generalCategoryId,
        text: q.text,
        answer: q.answer,
        points: q.points,
      },
    });
  }

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
