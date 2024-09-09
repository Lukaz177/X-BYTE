const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtRSUhVaGExWTZ6TU0xYVhNbkhvb2QzK09KTy9rNWpLbzc1TSs4MmszND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmdlc2wySWp2YVlMc0xSUHZEVC9DVmV5SUtSbE1CZDBlbHB2YXQ5Y0xEND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT3haNEVnV01mQWwyT05zcFE5YzZkT1l5SUtvanpQY0RyeTJkRk9BUjBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZVHRUa0dXWXV6L08yaGI5Zm5VRnFiOUdORVU1OXZxME5OV05qMzE2SG13PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFR0pLZEtsdUFjQ1FUajRpdHhZbnU3MU4rMUhEUUM1eG1TdXROUU5YbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBZDZ5Z0NoR29mMnhGMTluRUNyb29zV3M4bEVtalVwN1ZmK3NKNVRGQnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0k4L3JLYm5BM2tHdVd6VzNJZW0zYWVocEp4VGRDMnNqOXpLd3pSbGdHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGlVL3F0Zy9ER3BlTmtOaldWSkhpV2tsU1lEMlVZMitSOS9YRll5MU9Faz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNpM29RUUtnRE9qZ05DbWRNdmg4dXRIQ29KajZZT0cyR1V6N2ZUdk9jdEVEOU9Fdm9Rb0w5N293cmRhVTVEOFg1amJ0SHlJMXA2RGlmaElGY09YZWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJhMzhkM3NVekozTkVWdFNZSVQzN2h1MEJZN09yZm1DK0ZzOEpXT09lazcwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxQlpNUXZxa1RnR2g5cHRCa0hieVJBIiwicGhvbmVJZCI6IjU4ODBmZGE4LTcwM2YtNGM1NS04NzIxLWE3N2M4MTFmNTQ4OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Vkx6M2ZyWlZBWDJFVWFYLzVnUCtGR1BWR1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHZVMTFkTDFNNHM1R0Y2RG9rWVdtZk1PRDhnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFMN1hCQ0FRIiwibWUiOnsiaWQiOiIyNTI2ODI2NDI4MDI6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiwrNydWxl4ouGYnJlYWtlctmtzZwgwrMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ016NWdmd0VFTUhvKzdZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZwVjVsb2g4bSswZFVnRjgyM0YwZ21aTDRCQlBEVGVCYUZlelAvcUhKaUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Img0TVNRZzd6bGdQWjdGSWp3UWYrZTJ2SlVqUlU5QnkyVUtYRmM5bHhmRDhLSFFRZVFLTjdtMTNZVzM3eXBYdjZEazcvRzRqMmFKaU5tTVhFZ0I2MEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGTy84QWhJbENIdCt5MjhsNCtVblJVcjNrQ1FsQWFoenJscjRTTTk2YUsvZjdWZEdFaFVXSlpYQzZpODdDekVCL2o0NnFCVmdBYjcvTWFEWHZVcVZnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1MjY4MjY0MjgwMjoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYNlZlWmFJZkp2dEhWSUJmTnR4ZElKbVMrQVFUdzAzZ1doWHN6LzZoeVlnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1ODg3NTY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNnMCJ9' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '252682642802' : process.env.OWNER_NUMBER,   
OWNER_NAME: process.env.OWNER_NAME === undefined ? 'lukas' : process.env.OWNER_NAME,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? false : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? false : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? 'POWERED BY HAMZA': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,    
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,        
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,    
WELCOME: process.env.WELCOME || false  ,    
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,         
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,    
ANTI_DELETE : process.env.ANTI_DELETE || true ,
BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO  

};
