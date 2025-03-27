import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class Teacher extends Model {
  public id!: number;
  public userId!: number;
  public firstName!: string;
  public lastName!: string;
  public department!: string;
  public contactNumber!: string;
}

Teacher.init({
  teacherId: {
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
  department: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Teacher',
  tableName: 'teachers'
});

export default Teacher;