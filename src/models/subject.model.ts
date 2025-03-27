import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import ClassSubject from './class-subject.model.js';

class Subject extends Model {
  public id!: number;
  public name!: string;
  public code!: string;
  public description!: string;
}

Subject.init({
  subjectId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Subject',
  tableName: 'subjects'
});

// // Subject relationships
// Subject.hasMany(ClassSubject, { 
//   foreignKey: 'subjectId', 
//   as: 'classSubjects' 
// });
// ClassSubject.belongsTo(Subject, { 
//   foreignKey: 'subjectId', 
//   as: 'subject' 
// });

export default Subject;