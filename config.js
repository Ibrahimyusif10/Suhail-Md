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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_32_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICA1NixcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4QzlSR0k0ekxqK0RWcXB1WmJNSGlRR2o3T05KbXZsU212WTJMYU1WQjVVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJud0Z6enVLQ1FRQ2NTZkZTb2J6eUNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUyNGEwYjhmLTc5MWYtNDNiZS1hODViLTM1YzI3NzAwMTVlN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAyNTIsXG4gICAgICAxOTYsXG4gICAgICAxNjIsXG4gICAgICAyMzksXG4gICAgICA3NixcbiAgICAgIDE1MixcbiAgICAgIDYwLFxuICAgICAgMTA4LFxuICAgICAgNDIsXG4gICAgICA4NyxcbiAgICAgIDQyLFxuICAgICAgMjI0LFxuICAgICAgMTU1LFxuICAgICAgODIsXG4gICAgICAyMzksXG4gICAgICAxMjYsXG4gICAgICAxNDAsXG4gICAgICAyNTUsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMjI0LFxuICAgICAgMzcsXG4gICAgICAxODQsXG4gICAgICA3MSxcbiAgICAgIDE4MCxcbiAgICAgIDIxOSxcbiAgICAgIDEyNixcbiAgICAgIDcsXG4gICAgICAxMjEsXG4gICAgICAwLFxuICAgICAgMjIsXG4gICAgICAxNDMsXG4gICAgICA2NCxcbiAgICAgIDI0MixcbiAgICAgIDIzMixcbiAgICAgIDI4LFxuICAgICAgMjM4LFxuICAgICAgMjI1LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdZRjE2SlMxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM4NTc3NTE2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjkyMTc2NjAxNjIyNzM6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS21IcUxVRUVJbk8rTFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlTURjeHdob1NJYkFSME0zTFZYS0ZWMkxYZEZYSXE0WnhIcGtwL2tIM2hzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdtNGNYV0wzcWFpOHF5WGFlNjdmYTZLZkhuVlpoUEVMMlNUWjRDUFRkVXFxNy9Zall1RHkwVXJxdnhBSEYxWDB3R0YxZ2xxbUR1WEs1Tk1OekYyWUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZ3VHdnQWFLWGRsUWFXN2JqVnZ4a1pJZ0ZWd21ZQ09iT3NMRW5ZUkQrMDNZNWwrUndVQnNFNkZZWjQyN0tabE1td0FKY2d4dVNIbTJKelp3WGE1Y0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzg1Nzc1MTY6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjQwNzE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmxPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKbE8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPdHJTSVpZZzM3dUsvTVJJVFdvMGxLRDVvUDRic2NBZVRHb2JCMTRYamhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExODU1NDcxNzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU1MDE0Nzk2MFwifSIKfQ=="  // PUT your SESSION_ID 


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
