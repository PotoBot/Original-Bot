let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw `${ag}𝙉𝙊 𝙁𝙐𝙀 𝙀𝙉𝙑𝙄𝘼𝘿𝙊 𝙋𝙊𝙍 𝙈𝙄, 𝙋𝙊𝙍 𝙀𝙉𝘿𝙀 𝙉𝙊 𝙀𝙎 𝙋𝙊𝙎𝙄𝘽𝙇𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝙀𝙎𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀`
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^eliminar|del(ete)?$/i
export default handler
