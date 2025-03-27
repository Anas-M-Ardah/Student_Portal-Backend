import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class ClassSubject extends Model {
  public id!: number;
  public classId!: number;
  public subjectId!: number;
  public teacherId!: number;
  public scheduleTime!: string;
  public roomNumber!: string;
}

ClassSubject.init({
  classSubjectId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  scheduleTime: {
    type: DataTypes.STRING,
    allowNull: true
  },
  roomNumber: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'ClassSubject',
  tableName: 'class_subjects'
});

export default ClassSubject;