import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { hollywoodQuestions } from './hollywood';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const HOLLYWOOD_CATEGORY_ID = 'bc21f965-46b6-4e44-b191-247590a79922';

async function main() {
  console.log(`Seeding ${hollywoodQuestions.length} Hollywood questions...`);

  for (const q of hollywoodQuestions) {
    await prisma.question.create({
      data: {
        categoryId: HOLLYWOOD_CATEGORY_ID,
        text: q.text,
        answer: q.answer,
        points: q.points,
        fileUrl: q.fileUrl,
        fileType: q.fileType,
        answerFileUrl: q.answerFileUrl,
        answerFileType: q.answerFileType,
      },
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
