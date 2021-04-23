exports.wait = (pushname) => {
	return`「 𝗪𝗔𝗜𝗧 」\n*ぐ Name: ${pushname}*\n〴 𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜𝗣𝗥𝗢𝗦𝗘𝗦 𝗠𝗢𝗛𝗢𝗡 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗣𝗔𝗠!`
}

exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = (prefix, pushname) => {
	return`*「 PENDAFTARAN 」*\nぐ Cara daftar ${prefix}daftar nama|umur\nぐ Contoh: ${prefix}daftar ${pushname}|16`
}

exports.rediregis = (prefix, pushname, sender) => {
	return`*「 SUDAH TERDAFTAR 」*\nぐ Nickname: ${pushname}\nぐ Nomor: @${sender.split("@")[0]}\nぐ Web Api: wa.me/${sender.split("@")[0]}\n〴 NOTE: Kamu Sudah Terdaftar!\nSilahkan Ketik ${prefix}menu`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner Dehan • BOT, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*ぐ Format salah atau salah ketik*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (prefix, pushname, namaUser, umurUser, serialUser, time, sender, _registered) => {
	return`╭*「 REGISTERED AS 」*
│ぐ Nomor mu telah terdaftar sebagai
│╭─────────────────
│├ぐ Nickname:
│├─〴 ${pushname}
│╰─────────────────╮
│╭─────────────────╯
│├ぐ Nama:
│├─〴 ${namaUser}
│╰─────────────────╮
│╭─────────────────╯
│├ぐ Umur:
│├─〴 ${umurUser} Tahun
│╰─────────────────╮
│╭─────────────────╯
│├ぐ Mentioning:
│├─〴 @${sender.split("@")[0]}
│╰─────────────────╮
│╭─────────────────╯
│├ぐ Link Wa.Me:
│├─〴 wa.me/${sender.split("@")[0]}
│╰─────────────────╮
│╭─────────────────╯
│├ぐ Waktu Pendaftaran:
│├─〴 ${time}
│╰─────────────────╮
│╭─────────────────╯
│├ぐ Nomor Serial:
│├─〴 ${serialUser}
│╰─────────────────╮
│╭─────────────────╯
│ぐ Total User:
│ぐ ${_registered.length}
│ぐ NOTE : Silahkan ketik ${prefix}menu
│╰─────────────────╮
╰──────────────────╯`
}

exports.cmdnf = (prefix, pushname, command) => {
	return`Maaf ${pushname}\ncommand *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
 ╭─────────────────
ぐ Nama : ${pushname}
ぐ Nomer : ${sender.split("@")[0]}
ぐ Xp : ${getLevelingXp(sender)}
ぐ Limit : +3
ぐ Pangkat : ${role}
ぐ Level : ${getLevel} ➛ ${getLevelingLevel(sender)}
 ╰─────────────────
`}
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/62895330379186\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (pushname, limitCounts, sender) => {
	return`
*「 LIMIT COUNT 」*
 ╭─────────────────
ぐ Username: ${pushname}
ぐ Nomor: @${sender.split("@")[0]}
ぐ Web Api: wa.me/${sender.split("@")[0]}
ぐ sisa limit anda : ${limitCounts}
 ╰─────────────────
NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}
exports.hitcount = (pushname, hitCounts, sender) => {
	return`
*「 LIMIT COUNT 」*
 ╭─────────────────
ぐ Username: ${pushname}
ぐ Nomor: @${sender.split("@")[0]}
ぐ Web Api: wa.me/${sender.split("@")[0]}
ぐ sisa limit anda : ${hitCounts}
 ╰─────────────────
NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}
exports.satukos = () => {
	return`*Tambah parameter 1(Untuk On) atau 0(Untuk Off)`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`
ぐ *「 ATM 」*
 ╭─────────────────
ぐ Name: ${pushname}
ぐ Nomor: ${sender.split("@")[0]}
ぐ Uang: ${uangkau}
 ╰─────────────────
`}
