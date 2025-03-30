import Teacher from "../models/teacher.model.js";
import colors from 'colors';
import bcrypt from 'bcrypt';

export const teacherLogin = async (email: string, password: string) => {
    console.log(colors.blue('Logging in teacher...'));
    const teacher = await Teacher.findOne({ where: {email} });
    if (!teacher) {
        console.log(colors.red('Invalid email.'));
        return "Invalid email";
    }

    const isPasswordValid = await bcrypt.compare(password, teacher.password);
    if (!isPasswordValid) {
        console.log(colors.red('Invalid password.'));
        return "Invalid password";
    }

    console.log(colors.green('Teacher logged in successfully.'));
    return teacher;
}

export const createTeacher = async (teacher: any) => {
    console.log(colors.blue('Creating teacher...'))
    const newTeacher = await Teacher.create(teacher);
    console.log(colors.green('Teacher created successfully.'))
    return newTeacher;
}