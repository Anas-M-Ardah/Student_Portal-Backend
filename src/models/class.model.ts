import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class Class extends Model {
  public id!: number;
  public name!: string;
  public grade!: string;
  public section!: string;
  public academicYear!: string;
}

Class.init({
  classId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
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
  },
  academicYear: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Class',
  tableName: 'classes'
});

export default Class;