require('dotenv').config();
module.exports = {
    SERVER_PORT:process.env.SERVER_PORT,
    FRONTEND_DIRECTORY:process.env.FRONTEND_DIRECTORY,
    DATABASE_URL:process.env.DATABASE_URL,
    DATABASE_NAME:process.env.DATABASE_NAME,
    DATABASE_PORT:process.env.DATABASE_PORT,
    DATABASE_USER:process.env.DATABASE_USER,
    DATABASE_PASSWORD:process.env.DATABASE_PASSWORD
}