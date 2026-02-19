const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nIUUwBAI#RWw03a9IkLEUSRJ34ECszy8Ywne7m2ZPIf_MY62FRCE",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Hnsk23/hnsk/blob/main/images/HANSA%20md.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 HANSA-MD Is Alive Now😍*            © by HANSAKA NIRMAN 💙",
BOT_OWNER: '94768546691',  // Replace with the owner's phone number


};
 
 
 
