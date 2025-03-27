import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class Assessment extends Model {
  public id!: number;
  public classSubjectId!: number;
  public type!: string;
  public title!: string;
  public maxMarks!: number;
  public date!: Date;
}

Assessment.init({
  assessmentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  classSubjectId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('exam', 'quiz', 'assignment', 'project'),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  maxMarks: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Assessment',
  tableName: 'assessments'
});

export default Assessment;