require('dotenv').config();
module.exports = {
	DATABASE_FILE: process.env.DATABASE_FILE,
    SERVER_PORT:process.env.SERVER_PORT,
    API_VERSION:process.env.API_VERSION,
    FRONTEND_DIRECTORY_PATH:process.env.FRONTEND_DIRECTORY_PATH,
    DATABASE_URL:process.env.DATABASE_URL,
    DATABASE_NAME:process.env.DATABASE_NAME,
    DATABASE_PORT:process.env.DATABASE_PORT,
    DATABASE_USER:process.env.DATABASE_USER,
    DATABASE_PASSWORD:process.env.DATABASE_PASSWORD
}