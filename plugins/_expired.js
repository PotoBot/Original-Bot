export async function all(m, conn) {
    //let res = await conn.groupAcceptInvite(code)
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let caption = `*π©ππππ ${this.user.name}* *πΊπ ππ πππ πππππ!!!, πΊπ ππππππ πππ ππππππ, ππππ ππ πππππππ _#bottemporal_ π·πππ πππ ππππππ ππ πππππ!!*\n\nβ *π¨πππππππππ ππππ ππππππππ\n*https://facebook.com/groups/721802642266362/*`
        let pp = './media/menus/Menu2.jpg'
    //await this.sendButton(m.chat, caption, wm, null, [['Eliminar caducado', '/delexpired'], ['Cec caducado', '/cekexpired']], null)
await this.sendButton(m.chat, caption, wm, pp, [['π―ππππ ππππππ π€', '.hastapronto']], null)
//await conn.sendHydrated2(m.chat, caption, wm, pp, 'https://github.com/GataNina-Li/GataBot-MD', 'πππ©ππ½π€π©-ππΏ', ig, 'ππ£π¨π©πππ§ππ’', null, m,)
        
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}

