let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Dana [081319944917]
│ • Dana [088213292687]
│ • Gopay [088213292687]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281390658325
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
