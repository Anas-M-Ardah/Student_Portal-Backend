import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class Enrollment extends Model {
  public id!: number;
  public studentId!: number;
  public classSubjectId!: number;
  public enrollmentDate!: Date;
}

Enrollment.init({
  enrollmentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  classSubjectId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  enrollmentDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Enrollment',
  tableName: 'enrollments'
});

export default Enrollment;