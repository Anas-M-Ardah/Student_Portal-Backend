import Joi from "joi";
import { teacherLogin, createTeacher } from "../services/teacher.services.js";
import { generateToken } from "../middlewares/jwt.js";

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const createTeacherSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    department: Joi.string().required(),
    contactNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const teacherLoginController = async (req: any, res: any) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        
        const { email, password } = req.body;
        const teacher = await teacherLogin(email, password);

        if(teacher == "Invalid email") {
            return res.status(401).json({ error: "Invalid email" });
        }else if(teacher == "Invalid password") {
            return res.status(401).json({ error: "Invalid password" });
        }else{
            const token = generateToken({ teacherId: teacher.teacherId });
            return res.status(200).json({ message: "Login successful", token, success: true, userType: teacher, name: teacher.firstName + " " + teacher.lastName });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const createTeacherController = async (req: any, res: any) => {
    try {
        const { error } = createTeacherSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const teacher = await createTeacher(req.body);
        return res.status(201).json({ message: "Teacher created successfully", teacher, success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};