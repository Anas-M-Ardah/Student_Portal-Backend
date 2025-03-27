import Joi from "joi";
import { studentLogin, createStudent } from "../services/student.services.js";
import { generateToken } from "../middlewares/jwt.js";

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const createStudentSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    grade: Joi.string().required(),
    section: Joi.string().required(),
    academicYear: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const studentLoginController = async (req: any, res: any) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        
        const { email, password } = req.body;
        const student = await studentLogin(email, password);

        if(student == "Invalid email") {
            return res.status(401).json({ error: "Invalid email" });
        }else if(student == "Invalid password") {
            return res.status(401).json({ error: "Invalid password" });
        }else{
            const token = generateToken({ studentId: student.studentId });
            return res.status(200).json({ message: "Login successful", token, success: true });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const createStudentController = async (req: any, res: any) => {
    try {
        const { error } = createStudentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const student = await createStudent(req.body);
        return res.status(201).json({ message: "Student created successfully", student, success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};