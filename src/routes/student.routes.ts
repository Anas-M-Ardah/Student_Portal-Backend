import router from "express";
import { studentLoginController, createStudentController } from "../controllers/student.controller.js";

const studentRouter = router.Router();

studentRouter.post('/login', studentLoginController);
studentRouter.post('/register', createStudentController);

export default studentRouter;