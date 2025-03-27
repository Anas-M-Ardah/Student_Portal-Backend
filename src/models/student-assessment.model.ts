import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class StudentAssessment extends Model {
  public id!: number;
  public studentId!: number;
  public assessmentId!: number;
  public obtainedMarks!: number;
  public grade!: string;
}

StudentAssessment.init({
  studentAssessmentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  assessmentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  obtainedMarks: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  grade: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'StudentAssessment',
  tableName: 'student_assessments'
});

export default StudentAssessment;