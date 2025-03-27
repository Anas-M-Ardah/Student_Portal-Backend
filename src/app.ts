import express from 'express';
import { initializeDatabase } from './config/database.js';
import setupAssociations from './models/associations.js';

const app = express();
const port = 3000;

app.listen(port, async () => {
    await initializeDatabase();
    await setupAssociations();
    console.log(`Server is running on port ${port}`);
});