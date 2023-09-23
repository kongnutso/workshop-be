// src/app.ts
import { json } from 'body-parser';
import express, { Express, Request, Response } from 'express';
import  { sequelize, StudentModel } from './sequelize';
import { asyncWrapper } from './utils/asyncWrapper';

const app: Express = express();
const port: number = 3000;

(async () => {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log(e);
  }
})();

app.use(json({ limit: '26mb' }));

app.get('/student', asyncWrapper(async (req: Request, res: Response<any>) => {
  const students = await StudentModel.findAll();
  res.json({ students })
}))

app.post('/student', asyncWrapper(async (req: Request, res: Response<any>) => {
  console.log(req.body);
  const students = await StudentModel.create({
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.status(201).send();
}))

app.listen(port, () => console.log(`Application is running on port ${port}`))
