require("./all/module")
global.storename = "VIOLET CRASH"
global.dana = "2347019170750"
global.gopay = ""
global.qris = false
global.owner = '2347019170750"
global.namabot = "VIOLET V4"
global.nomorbot = "2347019170750"
global.namaCreator = "VIOLET CRASH"
global.linkyt = ""
global.autoJoin = false
global.antilink = false
global.versisc = '4.0'
global.delayjpm = 5500
global.codeInvite = ""
global.imageurl = 'https://files.catbox.moe/f2h6x0.jpg'
global.isLink = 'https://t.me/Lieangell'
global.packname = "Sticker By🤝"
global.author = "LIEANGEL- \n\n\n\n\n\n62856038460882"
global.jumlah = "5"
//============== [  ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ 🎭 ] ================\\














//============== [  ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ 🎭 ] ================\\





















//============== [  VIOLET GEN 1 🎭 ] ================\\







let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})