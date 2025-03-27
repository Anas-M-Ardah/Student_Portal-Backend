import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../config/database.js';
import bcrypt from 'bcrypt';

class Student extends Model {
  public studentId!: number;
  public email!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public grade!: string;
  public section!: string;
  public academicYear!: string;
}

Student.init({
  studentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'student_id'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 255]
    }
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'first_name'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name'
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
    allowNull: false,
    field: 'academic_year'
  }
}, {
  sequelize,
  modelName: 'Student',
  tableName: 'students',
  hooks: {
    beforeCreate: async (student) => {
      if (student.password) {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
        student.password = await bcrypt.hash(student.password, salt);
      }
    },
    beforeUpdate: async (student) => {
      if (student.changed('password')) {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
        student.password = await bcrypt.hash(student.password, salt);
      }
    }
  }
});

export default Student;