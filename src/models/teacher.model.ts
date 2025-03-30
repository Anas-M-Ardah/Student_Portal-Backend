import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import bcrypt from 'bcrypt';

class Teacher extends Model {
  public teacherId!: number;
  public email!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public department!: string;
  public contactNumber!: string;

  // Method to compare password
  async comparePassword(plainPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, this.password);
  }
}

Teacher.init({
  teacherId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'teacher_id'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
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
  department: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'contact_number'
  }
}, {
  sequelize,
  modelName: 'Teacher',
  tableName: 'teachers',
  hooks: {
    beforeCreate: async (teacher) => {
      if (teacher.password) {
        const salt = await bcrypt.genSalt(10);
        teacher.password = await bcrypt.hash(teacher.password, salt);
      }
    },
    beforeUpdate: async (teacher) => {
      if (teacher.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        teacher.password = await bcrypt.hash(teacher.password, salt);
      }
    }
  }
});

export default Teacher;