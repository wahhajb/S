let handler = async (m, { command, text }) => m.reply(`‌     • ╌─━┇ *﷽*┇━─╌ •
‌     *『استقبــال🚪ستـــورم』*
‌ *━• ━⎔── ━• ━ ──⎔━• ━* 
‌ *━• ━⎔── ━• ━ ──⎔━• ━* 
*☬↫┊♦┊القــب 『』*
*• ━ ──⎔*
*☬↫┊🎌┊انمــي『』*
*• ━ ──⎔*
*☬↫┊🧑🏻👩🏻┊النــوع『』*
*• ━ ──⎔*
*☬↫┊📧┊طــرف『』*
‌ *━• ━⎔── ━• ━ ──⎔━• ━* 
‌ *━• ━⎔── ━• ━ ──⎔━• ━*
*⌬ ممنــوعات الاستقـبال 📛*
*☬↫ممنــوع الســوالف🚫*
*☬↫ممنـــوع الســب🚫*
*☬↫قضــاء 24 ســاعه دون تعبـئة الاستمــاره 🚫*
‌ *━• ━⎔── ━• ━ ──⎔━• ━* 
‌ *━• ━⎔── ━• ━ ──⎔━• ━*
‌            *⌬ توقيــع النقـــابه✒️*
‌           *𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['استقبال']
handler.tags = ['استمارة استقبال']
handler.command = /^(الاستماره|1|استماره|استمارة)$/i

export default handler
