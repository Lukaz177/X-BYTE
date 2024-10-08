const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5OODN6cTZlMmpxUEhpcnFQS1A1cyttYUFOMHEwZytaWVJFSkxWNVdIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmRXcy96ZFVjS01UMllvcExnSGJaRlpzZzlhTFZ4VHFta2ZtZnlnM2ZWMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSE9HQ1ZFVTNuN3Btd05qOHgrZ2hqeHZ2N01oZ3AxWEZ1b01KL1lva1ZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFK0o0Y1JxdGZEK3ZMWXpuVmpLOE1Od2tuWXBEMmNRMEVqM3RRMlE3bEhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCbWtkT3hKSFEzd1FheXdISVBjTnNKZk0wU28vYTBTV0NtN2hMSVdPbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlKUnFLVTlWcXVBazFVQzhXSXFtMllQNFBhbVFFMVhnRFJzc09hL1BoZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RNNXZkQmJDM2F5emFLbmZwU3pxbjBIcFlUQTVaM1MrMXZsSDYzN3cydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzBOR1VJQytwT1BSKzZOZmFUVndRRmQxL0VFR2ZYMEl2NnZodnFBRzR3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcveEJadHdiSEpjeUJ0V3JLeGx0MmxMbkdpUzJnQkpVeFlCVDJjdnB2b2xYUUp3cHBwNnZlNDYrdjJNU3NpdlNDUmgxRExZTThKUmhONFRBY1h0UkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6Imp2S1czWk0wZWV1d3gwTmlaMjVCUDRHbVJKSkd3RGNOU1dNenowMjhLVTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjUyNjg1MTg5NzM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNFM0YxNTg4MjhGMEEzNTk5Qjg0QTU5NDg0QTdBMzNFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgzOTQxNzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1MjY4NTE4OTczNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5RjYzNEQyQTI3MjkxOTUyNjY3QzEwNjhBMjkxMzE1QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4Mzk0MTc5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaZUdCblVYRlRjT1JaRzZHNm5oRHF3IiwicGhvbmVJZCI6IjYwYzZiOWJkLTAzMmUtNGM4Yi04NGFjLTE3YWM4OGYwMmMyZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4b28rVU16NDdJd25zU2N4aFF5UGw0Z094bW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2s5aTBvUEhpSlg0WG51eGF6cXcxREVCMTB3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IksxWFE3WFhEIiwibWUiOnsiaWQiOiIyNTI2ODUxODk3MzY6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIYW16YSDwn5mH8J+PveKAjeKZgu+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzIrNHN3RkVMUG5sTGdHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoickUvOS9FbVpOUlRKWUJRUytlK2Ruams4bHBHZXVMTU1EZzV3clRkS2VqWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibXNXSDYzblhKR0VPNEV6UG43d1VQOEEyQTdQamxHZEVURENxczNheWhwS2cyK3k5cUtrbHFydm5OZTZOTWt0YWZBUVVWMFp2YXg1R3ZFa0RUNU9tQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ilg1NjEvNUQxcGJ1R3FzWTBWTXJiRG00dXVUWFZwVVgyVmpvVXlpV1BESnVtSnJkVS92VzVDbFRLaUEwUzFYcUhDNmlESHZLRnN6UGpPRDBBaUwxdkRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjUyNjg1MTg5NzM2OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXhQL2Z4Sm1UVVV5V0FVRXZudm5aNDVQSmFSbnJpekRBNE9jSzAzU25vMiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODM5NDE3NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDVzIifQ==' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '252682642802' : process.env.OWNER_NUMBER,   
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
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
