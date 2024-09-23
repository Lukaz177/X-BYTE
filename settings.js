const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0svRy9GK0EwL0s5ZnFOU3VCOHJsZElWcFpTVGJadjN6ZHRFZDM5Q2RuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVhJMnNWeDFQdEFZN3NyMTVsMGtuT1lkU01lVjRqRjdwUlJRenIzN1ZTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSGE5MzJoU2F5N25Vckc2NUxEZ1B5SDA1RFNUVTNtWlBYU3RXQzRnTVdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSEN1UlNvL2syajV3cFFSVUEyOXRkNG56QWZwYllmZjdxS1VEdUQwSTM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFBTjVhbGRlZzNoV29iSm5PSHBIeS94TmV6Wm5SMXFhU01hbitGL1A1R0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGSXZDNXpWS3BxaWx0Ym9LTXd6dTkvUk4zL3BreVdzWFRBcWFVUlp6MHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5NcnBHT1IxTzAzZFVGTkFxVUdtbHlXWTJhSXVDNWtFK3hZN1JreXIwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEJHZWQ1NXlJRkVPeXNGa2sySFhYUjZiODgvRStyV1RjSUFEMXI0azNGOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhVZnBMZ3Ntc0x5TXJtekMwTGlpd2tKME14anMwTmkwOXJ1R3dKYlgyeHNWM1o2OXZBOVpMVWM4MVpXdWFmdnkvVTVoNWtmaXF0SGVXelpEQzdTNmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJsc1AvYndMVk1uZFovelEyWDNGSVJFNTVkNG5IenpoVDhyWkJHTkc2RFNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1MjYxNDk1MDcyNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMkNBNjI1OUVGNDJBNkE1MzgzNjcxMTJFMzVCNkFDMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MDY5MDI1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTI2MTQ5NTA3MjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTQ4QUQzN0FERDdDM0I4RjFBODk3MDQzREExRjIzNkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzA2OTAyNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNWZEZjlxMjBTY0NyVE5sWVNnNUt6dyIsInBob25lSWQiOiIyYmVkYmNkMi1iMGM0LTQ1YjQtYWYwZi1jNmU5YjVlNDZjZWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGUzYVljL0sva2VvNmkyYU1qM2RYeFcrNEdJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx4L2NvZGRaOXVIMG14S2MrTFNqYnZqaHFKND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSWktHNUhCRSIsIm1lIjp7ImlkIjoiMjUyNjE0OTUwNzI2OjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0gMqc4bSN4bSH4bSb4bSbIOG0gMqZ4bSc4bSc4bSL4bSAyoAg4bSN4bSPypzhtIDhtI3htIfhtJvhtJsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BMdXZLa0RFTTcydzdjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik8zYUhVR084Y010bXRaVWkxR0RIUmZPbGpwQVZVUnNNV2ZVUTMzTGdHQ1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdSNWhxUW5SMWhmNy94Y3dTbzdrdFRqT2FEZ2R0eVMxTHE0MmZybUtta09IdEFJWnNCSWRmWGJiNFBFS1BSR3d3dGoySktHMHZvb2JqN2lmTTlhTUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFd2JIc0NaNGNqL01EQlY2cmh1ZzZKL2FSanBVK2QxTU9LUHlFQ2NKSFlpN3oraUhDbTZJNWJhVnM0cTQ1SldjZW1WV0NDenh3bHdNV2dwc0F0clVnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1MjYxNDk1MDcyNjoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUdDJoMUJqdkhETFpyV1ZJdFJneDBYenBZNlFGVkViREZuMUVOOXk0QmdrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MDY5MDIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9uUiJ9' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '254111598451' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
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
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
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
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_DELETE_TIME : process.env.BOT_DELETE_TIME || '7',
SECONDS_MINUTES_DAYS : process.env.SECONDS_MINUTES_DAYS || "days",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
