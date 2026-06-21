-- CreateEnum
CREATE TYPE "SuggestionType" AS ENUM ('Complaint', 'Category_Request', 'Other');

-- CreateEnum
CREATE TYPE "SuggestionStatus" AS ENUM ('Pending', 'Resolved');

-- CreateTable
CREATE TABLE "suggestion" (
    "id" TEXT NOT NULL,
    "type" "SuggestionType" NOT NULL,
    "message" TEXT NOT NULL,
    "status" "SuggestionStatus" NOT NULL DEFAULT 'Pending',
    "gameQuestionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "suggestion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "suggestion" ADD CONSTRAINT "suggestion_gameQuestionId_fkey" FOREIGN KEY ("gameQuestionId") REFERENCES "game_question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
