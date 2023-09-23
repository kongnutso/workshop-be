// src/app.ts
import express, { Express, Request, Response } from 'express'
import  { sequelize, UserModel } from './sequelize';

const app: Express = express();
const port: number = 3000;

(async () => {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log(e);
  }
})();

app.get('/user', async (req: Request, res: Response<{ body: any }>) => {
  const users = await UserModel.findAll();
  res.json({ body: users })
})

app.post('/user', async (req: Request, res: Response<{ body: any }>) => {
  const users = await UserModel.create({
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.status(201);
})

app.listen(port, () => console.log(`Application is running on port ${port}`))
