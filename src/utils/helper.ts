import { BadRequestException } from '@nestjs/common';
type StudentData = {
  attendancePercentage: string;
  behavior: any;
  exams: any;
  studentName: string;
};

export const parseDate = (date: string | undefined): Date | undefined => {
  if (!date) return undefined;
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    throw new BadRequestException('Invalid date format');
  }
  return parsedDate;
};

export const getStartOfDay = (dateString: string) => {
  const date = new Date(dateString);
  date.setUTCHours(0, 0, 0, 0);
  return date;
};

export const getEndOfDay = (dateString: string) => {
  const date = new Date(dateString);
  date.setUTCHours(23, 59, 59, 999);
  return date;
};
