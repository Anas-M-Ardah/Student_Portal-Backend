import router from "express";
import { teacherLoginController, createTeacherController } from "../controllers/teacher.controller.js";

const teacherRouter = router.Router();

teacherRouter.post('/login', teacherLoginController);
teacherRouter.post('/register', createTeacherController);

export default teacherRouter;