let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*جــرب دا🦦*:\n*ꔹ━━━━━ꔹ❰ افلام غموض ❱ꔹ━━━━━ꔹ*\n*『${pickRandom(global.bxviu)}』*\n*ꔹ━━━━━ꔹ❰ 𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪 ❱*`, m)
  m.react('🎞')
}
handler.help = ['Z O R O']
handler.tags = ['fun']
handler.command = /فيلم-غموض$/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]

}

 global.bxviu = ["Scream • 2022","The Conjuring • 2013","The Shining • 1980","Misery • 1990","The Exorcist • 1973","The Mist • 2007","Friday the 13TH • 2009","A Nightmare on Elm Street • 1984","عزلنه !","Chainsaw Massacre • 2022","The Rings • 2002","A quiet place • 2018","Jigsaw • 2017","IT • 2017","Child's Play • 1988","Slender Man • 2018","Brightburn • 2019","The purge • 2013","The purg 2 • 2016","Happy death day • 2017","A quiet place 2 • 2020","wrong turn • 2003","predator • 2010","Bird box • 2018","Greenland • 2020","My name is Anna • 2018","Happy death day • 2019"]
