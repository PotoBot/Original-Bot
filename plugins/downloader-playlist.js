/* Created by https://github.com/BrunoSobrino */
       /* Diseรฑo by Yameko-Bot V1*/

import yts from "yt-search"
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `๐ค๐ฆ๐ช๐ ๐๐จ๐ฉ๐ ๐๐ช๐จ๐๐๐๐ค?๐ค ๐๐ฃ๐๐ง๐๐จ๐ ๐๐ก ๐ฃ๐ค๐ข๐๐ง๐/๐ฉ๐๐ฉ๐ช๐ก๐ค ๐๐ ๐๐๐ฃ๐๐๐ค๐ฃ ๐๐๐๐ข๐ฅ๐ก๐ค:*\n*${usedPrefix + command} bad bunny - am`    
try {
let imagen1 = fs.readFileSync('./src/nuevobot.jpg') 
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let teskd = `๐๐ฎ๐ฌ๐ข๐๐ ๐ซ๐๐ฅ๐๐๐ข๐จ๐ง๐๐๐ ๐๐จ๐ง: ${args.join(" ")}`
const sections = [{
title: `|๏ผ๏ผ๏ผ๏ผ๏ผ{ ๏ผก๏ผต๏ผค๏ผฉ๏ผฏ }๏ผ๏ผ๏ผ๏ผ๏ผ|`,
rows: listSerch },
{              
title: `|๏ผ๏ผ๏ผ๏ผ๏ผ{ ๏ผถ๏ผฉ๏ผค๏ผฅ๏ผฏ }๏ผ๏ผ๏ผ๏ผ๏ผ|`,
rows: listSerch2 }]
const listMessage = {
text: teskd,
footer: '๐๐ฅ๐ข๐ฃ๐ ๐ฎ๐ง๐ ๐จ๐ฉ๐๐ข๐จ๐ง ๐ฒ ๐ฉ๐ซ๐๐๐ข๐จ๐ง๐ ๐๐ง๐ฏ๐ข๐๐ซ',
title: " ใ ๐ ๐จ๐ฆ๐๐๐ ๐ฅ๐๐๐๐๐๐ข๐ก๐๐๐ ใ",
buttonText: "[โฆ ๐๐๐๐๐๐๐๐๐๐ โฆ]",
sections}
const fake = { quoted: {
key : {
remoteJid: '6283136505591-1614953337@g.us',
participant : '0@s.whatsapp.net'},
message: {
orderMessage: {
itemCount: 9999999,
status: 1,
surface: 1,
message: '๐โ๐ ๐๐ฆ๐ ๐ก๐๐ - ๐ต๐๐ก - ๐๐ท', 
orderTitle: `Mystic`,
thumbnail: imagen1, 
sellerJid: '0@s.whatsapp.net'}}}}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)
} catch (e) {
m.reply('*[โ๐๐ฃ๐๐คโ] ๐ฌ๐๐๐๐, ๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ ๐ ๐๐๐๐๐๐๐๐๐๐*')
}}
handler.command = /^playlist|playlist2$/i
handler.limit = 1
export default handler
