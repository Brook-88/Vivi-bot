let timeout = 60000
let poin = 1000
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '*❐╏لم يتم الاجابة علي السؤال بعد┃❌ ❯*', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/Brook-88/Game/main/game-eyes.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*
  *⌬ ❛╏الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)} ┇*
  *استخدم انسحب للأنسحاب*
  *⌬ ❛╏الـجـائـزة💰↞ ${poin} نقاط┇*
      *⌬ ❛╏ 𝑧ₑ𝑧ₒ_𝑏ₒ𝑡 ╏*
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `*❮ ⌛┇انتهي الوقت┇⌛❯*\n*❐↞┇الاجـابـة✅↞ ${json.name}┇*`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['عيون']
handler.tags = ['fun']
handler.command = /^عيون/i

export default handler
