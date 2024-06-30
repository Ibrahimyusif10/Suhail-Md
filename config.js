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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Fk61zc1TQOeCc4Utr04PZL";
global.website=process.env.GURL || "https://chat.whatsapp.com/Fk61zc1TQOeCc4Utr04PZL" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "null" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "By Ibrahim Bot 🥳" 


global.devs = "2347017071590" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347017071590";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_28_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDEwLFxuICAgICAgICA3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY2LFxuICAgICAgICA1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIQzNpdnY1QkVYbDlOemJBSlRGblduMzhXNFhQYXhXZXVGV1dMWjcrcS9JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItcjhRaXFEcVFOMmpGTVdaZHlDSUtRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzMzE5ZTgyLTdmOTAtNDJlMi04NzYwLWQxNzI1NTgwMDY5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDc4LFxuICAgICAgODIsXG4gICAgICAxMjksXG4gICAgICA4LFxuICAgICAgMTkxLFxuICAgICAgMTg5LFxuICAgICAgMTc2LFxuICAgICAgNDIsXG4gICAgICAyMjMsXG4gICAgICAyMDEsXG4gICAgICAyMzEsXG4gICAgICA3MyxcbiAgICAgIDIwOCxcbiAgICAgIDExOCxcbiAgICAgIDIxNixcbiAgICAgIDE5MSxcbiAgICAgIDEzMyxcbiAgICAgIDIzOCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAxNTcsXG4gICAgICAyMDYsXG4gICAgICA2OSxcbiAgICAgIDQ4LFxuICAgICAgMjA1LFxuICAgICAgMTQ5LFxuICAgICAgNDgsXG4gICAgICA0MixcbiAgICAgIDQyLFxuICAgICAgMjAzLFxuICAgICAgMTkwLFxuICAgICAgMTU2LFxuICAgICAgMTk0LFxuICAgICAgNCxcbiAgICAgIDE0MixcbiAgICAgIDIwMixcbiAgICAgIDEyNCxcbiAgICAgIDIwNSxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGSFRXNVJSQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNzA3MTU5MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MjExMjkzNzEyMzg4MTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05LRDU0VUhFTHVqK0xNR0dCTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFN1SzlORHZMVnRicW5FWndmVzg4YkZRSFlSQ0puZnNwTlRGc1RsNHJEUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5NUJMblRrSmRNWmpCU3dSUm10UVhSZVdHWFpEWE0rZmF3NmVxdm5iM0RhQW90cEM3SzRtdllqcGlmbytUNzZhVjc5SWdSZWlBZmp3R3pIc3I2dHFEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6MHNSaGRmQ0pBNGdFU1VuRHJla3NJRnBXVHhFaHpNbDhxS0tsQitndEx4YmdrdW9oTSs2OS84NzRJalVLWXc3UHQ4Qi80UnNTQWpsYk56WFVRUUlBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE3MDcxNTkwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1MzgxMTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEcFNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURwUy5qc29uIjogIntcImtleURhdGFcIjpcIlFZTXF1YmVaTXdGdDNhelVEZGRualYyeWE3WnJ1aHVuQmhna1hpLzhDRVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5MTIyMTk3MCxcImN1cnJlbnRJbmRleFwiOjE4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMThdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTUwODAyNTM5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝓘𝓫𝓻𝓪𝓱𝓲𝓶 𝓨𝓾𝓼𝓾𝓯" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "IBRAHIM BOT 🔚",
  ownername:process.env.OWNER_NAME|| "𝓘𝓫𝓻𝓪𝓱𝓲𝓶 𝓨𝓾𝓼𝓾𝓯",

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
  //warncount: process.env.WARN_COUNT || 2,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
