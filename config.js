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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "221764172569";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_51_04_01_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUpvR0hIcjVsUjlQeWNzWkFJcUVuVXVQTkUzUnJMa0lsbTJGV0pJcy9YYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1kTmI3Z3FJR2JTaFJiWGluYTBqaTJmdjN3N0NBeDhKaFRiTVNETFREUXc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUtjN1BFUmVROElFQ2NmdUR6MHM1NzNmVE16UmhvZHJKeG95VlVKNG8zVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFBUVJVUGszVTg5d2xnSmZtdnRnQzVLS0JtZXNhN29lYWxGQWNGRlZZU2M9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibVAwS1BUWG1FZ1RMaDFWT0MrSUxMTTRIRGhRQVFvZWJxdXBQSDQ5WDZIND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIisvbStzMXpYcEhUMVp4Ylh4ekhPL0xPU1V4TXZycWV2Z0RLTXNsQnFNVHM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIrSmppVmJrdXRqck1VdmpGdXNUaHppaHluc1R3RS95VUF0QTcxOHBFU1c4PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTkEra3B2THhQbXFCYXpibzAzVXRINTh3QnNVaytkYTBYNVFNbGxkeWxEST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxMVJtQ1o0Sng0bFZ3L3FGVmtDdlRzMkUxNlExWkE0REEwL2tqL0RMdVc2TllML0xZSEFrellFbEFZc2dxVU5vUCtyUDUvbDY3YkZlcEpxSFpMdGFodz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NzQsXCJhZHZTZWNyZXRLZXlcIjpcIkpiL3NvN3hReXhxcktFdUpJS2JiVUt5MHBwc1VUSVVWVWFMWWtJZU4xMnc9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMjE3NjQxNzI1NjlAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiM0EwNkM0NUE1QzBDN0M0MjgzRDVcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTk3MjI4N30se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMjE3NjQxNzI1NjlAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiM0EyNzYzQ0EwRkVCQ0I5NTk0MTNcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTk3MjI5MX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcInNRQVVWWHVGUTY2WE1MRk5uekN2THdcIixcInBob25lSWRcIjpcImJhZDhmN2IxLTkzOTgtNGNkYS04MzVmLWM0ZmMxM2Y5ZWRjZlwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNEhVT05RWlhncmREd0xpcEJGeGN0OXdHVlRJPVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJYbjd3L0EyOFJkbVRpYjBFWTlNWllLYTROVFE9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0wrU3o2d0xFTHEvcXJBR0dBSWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJKM1NXWStuLy9Uc2RxbXZrdFMweWZsSE1XUmNMdERXSHg3Nk9wSWdvSml3PVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwid0t2ZExDVlh2cGdQNG5paGxSTitpNUJMS1FrcHhHdENFdjBiR3FudFVGUGwveFhUbkVKRGp3WkdFL1FyYk9PVUZJQmRPNDkvcEdLR0ZXUTFrQWp1Q2c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJvV1FkY05HZWJFMW54dlZrY3B0QUt0M1g3TXJNRUM2Vmw0ZHVZZ0xielZucGt0bmY0QnU4MEtZZno0VlR2QjcwOFpYcmwwWUZFWWtwQ0JmT3BCYkhqQT09XCJ9LFwibWVcIjp7XCJpZFwiOlwiMjIxNzY0MTcyNTY5OjJAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIlVuZSBtZXVmXCIsXCJsaWRcIjpcIjI0MDE3NDk5MDY2Mzc0MzoyQGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIyMTc2NDE3MjU2OToyQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlNkMGxtUHAvLzA3SGFwcjVMVXRNbjVSekZrWEM3UTFoOGUranFTSUtDWXNcIn19XSxcInBsYXRmb3JtXCI6XCJzbWJpXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExOTcyMjg1LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUVpSVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVpSS5qc29uIjogIntcImtleURhdGFcIjpcIld5aitRb1VOQnpMWFVUR2FwMndBMVRzNFQ3QndyMERNWnVQY25keUorZDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA0NjM2MTQwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzExNjQyOTcwNzk4XCJ9Igp9" ;


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
