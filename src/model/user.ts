export type User = {
  id: string;
  firstName: string;
  lastName: string;
  studentId: string;
  someText: string;
  year: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}