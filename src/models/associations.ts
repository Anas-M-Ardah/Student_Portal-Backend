import Subject from './subject.model.js';
import Class from './class.model.js';
import Teacher from './teacher.model.js';
import Student from './student.model.js';
import ClassSubject from './class-subject.model.js';
import Enrollment from './enrollment.model.js';
import Assessment from './assessment.model.js';
import StudentAssessment from './student-assessment.model.js';
import colors from 'colors';

import { sequelize } from '../config/database.js';

async function setupAssociations() {

  console.log(colors.blue('Setting up database associations...'));

  // Subject relationships
  Subject.hasMany(ClassSubject, { 
    foreignKey: 'subjectId', 
    as: 'classSubjects' 
  });
  ClassSubject.belongsTo(Subject, { 
    foreignKey: 'subjectId', 
    as: 'subject' 
  });

  // Class relationships
  Class.hasMany(ClassSubject, { 
    foreignKey: 'classId', 
    as: 'classSubjects' 
  });
  ClassSubject.belongsTo(Class, { 
    foreignKey: 'classId', 
    as: 'class' 
  });

  // Teacher relationships
  Teacher.hasMany(ClassSubject, { 
    foreignKey: 'teacherId', 
    as: 'classSubjects' 
  });
  ClassSubject.belongsTo(Teacher, { 
    foreignKey: 'teacherId', 
    as: 'teacher' 
  });

  // Student relationships
  Student.hasMany(Enrollment, { 
    foreignKey: 'studentId', 
    as: 'enrollments' 
  });
  Enrollment.belongsTo(Student, { 
    foreignKey: 'studentId', 
    as: 'student' 
  });

  // ClassSubject relationships
  ClassSubject.hasMany(Enrollment, { 
    foreignKey: 'classSubjectId', 
    as: 'enrollments' 
  });
  Enrollment.belongsTo(ClassSubject, { 
    foreignKey: 'classSubjectId', 
    as: 'classSubject' 
  });

  // Assessment relationships
  ClassSubject.hasMany(Assessment, { 
    foreignKey: 'classSubjectId', 
    as: 'assessments' 
  });
  Assessment.belongsTo(ClassSubject, { 
    foreignKey: 'classSubjectId', 
    as: 'classSubject' 
  });

  // StudentAssessment relationships
  Student.hasMany(StudentAssessment, { 
    foreignKey: 'studentId', 
    as: 'studentAssessments' 
  });
  StudentAssessment.belongsTo(Student, { 
    foreignKey: 'studentId', 
    as: 'student' 
  });

  Assessment.hasMany(StudentAssessment, { 
    foreignKey: 'assessmentId', 
    as: 'studentAssessments' 
  });
  StudentAssessment.belongsTo(Assessment, { 
    foreignKey: 'assessmentId', 
    as: 'assessment' 
  });

  await sequelize.sync({ alter: true });
  //success message
  console.log(colors.green("Models associations created successfully."));
}

export default setupAssociations;