const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349015420015";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_02_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgzLFxuICAgICAgICA3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0LFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0Y1Z4UXF3YXJpR2wwZEI4VWE4QWVvOTBFL2ZrZXd6NW9xRjRxbTd4b0JzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTU0MjAwMTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVFRUQxOUJFMjUyOTg1MDM5MjI1M0ZCM0E2QjMwMENFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTM4MzM2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvOGhOUHRPY1NQZTJpMC16VVROYTN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgxY2VhMWEyLTY1OTktNDEzZC04MTdhLWQxMTc3NzRjNDFjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDEsXG4gICAgICAyMzksXG4gICAgICA2NixcbiAgICAgIDE2MixcbiAgICAgIDEwNixcbiAgICAgIDIwMCxcbiAgICAgIDIxMSxcbiAgICAgIDYsXG4gICAgICA4MyxcbiAgICAgIDIyMyxcbiAgICAgIDUwLFxuICAgICAgNjQsXG4gICAgICAxOTIsXG4gICAgICAxNDcsXG4gICAgICAxNjksXG4gICAgICAyOSxcbiAgICAgIDE5NyxcbiAgICAgIDI5LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgNTEsXG4gICAgICA5NyxcbiAgICAgIDgwLFxuICAgICAgMjQwLFxuICAgICAgMTYxLFxuICAgICAgMTUsXG4gICAgICA3LFxuICAgICAgMTc5LFxuICAgICAgMTc4LFxuICAgICAgMjAxLFxuICAgICAgMzYsXG4gICAgICAxNjMsXG4gICAgICAyMDAsXG4gICAgICAxMTgsXG4gICAgICAyMTAsXG4gICAgICAyNTQsXG4gICAgICAxMTcsXG4gICAgICAxMCxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkpMVzZGSktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTU0MjAwMTU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIfwnZCa8J2QnfCdkJrwnZCbIPCdkIPwnZCi8J2QoPCdkKLwnZCt8J2QmvCdkKXwnZCsXCIsXG4gICAgXCJsaWRcIjogXCIxNTU5Mjg3ODc2OTc4MzA6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOaXU4ZFVCRUxiejZMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJaSEgxM2ZBb1ppdkI4ZnhTVUlNV2J5Zm03d3A5NW13UmF6L2ZaM01vQms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSjgwaGxpOWRsZkFiL1Z2SnZmeWdMOFZpdDVRSHcwY21uZHAxc1BPcHBtaytnRDk4akxMQjJob05WdCtIMGFVd09hd0JndDBITFBFTXhKTGVCbmJXRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieHhwV3NIQWZJMWhadmpCMG5TNHpQS1ZCU3BxWnY3c2c3eWF0RHVEK3I3UFNTYnExYlVwQWVDa1BOZWM1eEQ4YWk1cE5RRUg2a2svY2RxVE9nZWdlQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNTQyMDAxNTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzgzMzU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2R2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLZHYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIdmhVeGY3QW0vV2haRDdrS3VoNHNnWldQa2NDbWZvUEEzT25CNkNXWWtvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0ODU1MDc0MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTM4Mjc3ODI1OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
