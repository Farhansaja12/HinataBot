import fetch from 'node-fetch'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args[0]) throw `Use example ${usedPrefix}${command} http://i.coco.fun/short/1513tui/`
if (!args[1]) return conn.sendButton(m.chat, htki + ' COCOFUN ' + htka, null, null, [['❌ NO WM', `.cocofun ${args[0]} nowm`],['✅ WITH WM', `.cocofun ${args[0]} withwm`]],m)
let res = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=${global.lolkey}&url=${args[0]}`)
    let x = await res.json()
  if (args[1] == 'withwm') {
    conn.sendButtonVid(m.chat, await(await fetch(x.result.withwm)).buffer(), `*${htki} COCOFUN ${htka}*
*title:* ${x.result.title}
*tag:* ${x.result.tag}
*likes:* ${x.result.likes}
*dislike:* ${x.result.dislike}
*views:* ${x.result.views}
*uploader:* ${x.result.uploader}
*duration:* ${x.result.duration}
*dislike:* ${x.result.dislike}`, x.result.title + '.mp4', 'To mp3', '.tomp3', fpayment, adReply)
  }
  if (args[1] == 'nowm') {
    conn.sendButtonVid(m.chat, await(await fetch(x.result.nowm)).buffer(), `*${htki} COCOFUN ${htka}*
*title:* ${x.result.title}
*tag:* ${x.result.tag}
*likes:* ${x.result.likes}
*dislike:* ${x.result.dislike}
*views:* ${x.result.views}
*uploader:* ${x.result.uploader}
*duration:* ${x.result.duration}
*dislike:* ${x.result.dislike}`, x.result.title + '.mp4', 'To mp3', '.tomp3', fpayment, adReply)
  }
  }
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((cocofun)(downloder|dl)?)$/i

export default handler
