import express from 'express';
import { initializeDatabase } from './config/database.js';
import setupAssociations from './models/associations.js';
import studentRouter from './routes/student.routes.js';
import teacherRouter from './routes/teacher.routes.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api/students', studentRouter);
app.use('/api/teachers', teacherRouter);

app.listen(port, async () => {
    await initializeDatabase();
    await setupAssociations();
    console.log(`Server is running on port ${port}`);
});