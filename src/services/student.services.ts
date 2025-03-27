import Student from "../models/student.model.js";
import colors from 'colors';
import bcrypt from 'bcrypt';

export const studentLogin = async (email: string, password: string) => {
    console.log(colors.blue('Logging in student...'));
    const student = await Student.findOne({ where: {email} });
    if (!student) {
        console.log(colors.red('Invalid email.'));
        return "Invalid email";
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
        console.log(colors.red('Invalid password.'));
        return "Invalid password";
    }

    console.log(colors.green('Student logged in successfully.'));
    return student;
}

export const createStudent = async (student: any) => {
    console.log(colors.blue('Creating student...'));
    const newStudent = await Student.create(student);
    console.log(colors.green('Student created successfully.'));
    return newStudent;
}