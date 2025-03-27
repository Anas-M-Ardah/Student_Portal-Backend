import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class Student extends Model {
  public id!: number;
  public userId!: number;
  public firstName!: string;
  public lastName!: string;
  public grade!: string;
  public section!: string;
}

Student.init({
  studentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  grade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  section: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Student',
  tableName: 'students'
});

export default Student;