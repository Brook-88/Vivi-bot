
const handler = async (m, {conn, args}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_setdesc

  await conn.groupUpdateDescription(m.chat, `${args.join(' ')}`);
  m.reply('*❐┃تم تعديل وصف المجموعة بنجاح┃✅❯*');
};
handler.help = ['Setdesc <text>'];
handler.tags = ['group'];
handler.command = /^وصف|تعديل-وصف$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
