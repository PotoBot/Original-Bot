import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*πΈππ ππππΜ ππππππππ? ππ£ππ§ππ¨π ππ‘ ππ£π‘πππ ππ ππ€πͺππͺππ π₯ππ§π πππ¨πππ§πππ§ ππ‘ ππͺπππ€*'
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
await conn.reply(m.chat, '*[β] π¬ππππ, π΅π πππ πππππππ πππππππππ ππ πππππ*', m)}
}
handler.command = /^getaud|yt(a|mp3)$/i
export default handler