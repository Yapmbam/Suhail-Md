const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3548f393bf58b4f4c6a20.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "221770368599";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_16_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDI1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAzNCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5LFxuICAgICAgICA3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICA3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZW8wYVY4NXVkRnFXczEzeDdIVmFmV0JyUFNyS1l5M2ZkVzJzMldmZWc3WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUEtIakZPZENRTlctVlJvR0ZzUkZpZ1wiLFxuICBcInBob25lSWRcIjogXCIwM2YwMWQyNy0zOGEzLTQ0NDgtYjcyNS02NmNjZmNlNzI3OWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMTI0LFxuICAgICAgMTY1LFxuICAgICAgMzksXG4gICAgICAyNSxcbiAgICAgIDcyLFxuICAgICAgMjM0LFxuICAgICAgMjA4LFxuICAgICAgNjUsXG4gICAgICAxMyxcbiAgICAgIDEzMyxcbiAgICAgIDMyLFxuICAgICAgMTEyLFxuICAgICAgNDQsXG4gICAgICAyNDgsXG4gICAgICAyMDMsXG4gICAgICA2LFxuICAgICAgMTU5LFxuICAgICAgMjE3LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgMTc4LFxuICAgICAgMzQsXG4gICAgICAyMDUsXG4gICAgICAxNzYsXG4gICAgICAxMixcbiAgICAgIDY5LFxuICAgICAgMTI5LFxuICAgICAgMTc3LFxuICAgICAgMTgxLFxuICAgICAgOTQsXG4gICAgICAxNTksXG4gICAgICAxOTMsXG4gICAgICAyLFxuICAgICAgMTE5LFxuICAgICAgMTYxLFxuICAgICAgOTYsXG4gICAgICAxMjEsXG4gICAgICAzNCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ozMWhvQUhFTVgyN0xJR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWDJGdWliMjF6VWwyRHhSK0pweXIvUkxRdlhwRTNpRkcxZHpCekJGS0drUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKOVdLazR5Y0tTbHdXbnY4NzlkU1dCNjBhYmVOaE1LVUVYdUFQcGd6NGVBS0ltcHczblUyQStWaHdKOExtbC9RMkhrdGR6TWF4RzJLVUtVUU4vaUxCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvK0RSYkx0NDhnN2tZQlh1d3dKOFBNbHk2SkNzNkYyWU1zd1RTbUFpMjZNcmlwTzZaMUxlenp1Y1MvbGxRM0tXZCtadXRvWFBrRndCYU1oa1ZjNlVqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMTc3MDM2ODU5OToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMwNjAxMzY1NTY5NzAwOjI2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzcwMzY4NTk5OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MjU0OTg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTytzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPK3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzZkUzUkJSaEtnZlk3WTUwRnlPMEhES21ZcmlQMnVDbmRQRDE0aU0vY0hRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzkxNjE1MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzI1MjYyOTUyN1wifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
