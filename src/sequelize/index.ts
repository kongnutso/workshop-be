import { Sequelize, DataTypes } from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from '../config';

export const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`) // Example for postgres

export const StudentModel = sequelize.define('student', {
  // id: { type: DataTypes.STRING, primaryKey: true },
  firstName: { 
    type: DataTypes.STRING,
    // field: 'first_name',
  },
  lastName: { 
    type: DataTypes.STRING,
    // field: 'last_name',
  },
  studentId: { 
    type: DataTypes.STRING,
    // field: 'student_id',
  },
  someText: { 
    type: DataTypes.STRING,
    // field: 'some_text',
  },
  year: { 
    type: DataTypes.NUMBER,
    // field: 'year',
  },
  createdAt: { 
    type: DataTypes.DATE,
    // field: 'created_at',
  },
  updatedAt: { 
    type: DataTypes.DATE,
    // field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    // field: 'deleted_at',
  },
}, {
  underscored: true,
  paranoid: true,
});

export const model = {
  Student: StudentModel,
}