import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import colors from 'colors';


// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ 
  path: path.resolve(__dirname, '../../.env') 
});

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME || 'school_management',
  process.env.DB_USERNAME || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: parseInt(process.env.DB_PORT || '3306'),
    logging: console.log,
    define: {
      timestamps: true,
      underscored: true
    }
  }
);


// Test database connection
async function initializeDatabase() {
  try {
    console.log(colors.blue('Initializing database connection...'));
    await sequelize.authenticate();
    console.log(colors.green('Database connection established successfully.'));
    
    console.log(colors.blue('Synchronizing database models...'));
    await sequelize.sync({ alter: true });
    console.log(colors.green('Database models synchronized'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export {
  sequelize,
  initializeDatabase
};