exports.wait = (pushname) => {
	return`γ πͺπππ§ γ\n*γ Name: ${pushname}*\nγ΄ π¦ππππ‘π πππ£π₯π’π¦ππ¦ π π’ππ’π‘ πππ‘πππ‘ π¦π£ππ !`
}

exports.succes = () => {
	return`*γ SUCCESS γ*`
}

exports.lvlon = () => {
	return`*γ ENABLE γ LEVELING*`
}

exports.lvloff = () => {
	return`*γ DISABLE γ LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = (prefix, pushname) => {
	return`*γ PENDAFTARAN γ*\nγ Cara daftar ${prefix}daftar nama|umur\nγ Contoh: ${prefix}daftar ${pushname}|16`
}

exports.rediregis = (prefix, pushname, sender) => {
	return`*γ SUDAH TERDAFTAR γ*\nγ Nickname: ${pushname}\nγ Nomor: @${sender.split("@")[0]}\nγ Web Api: wa.me/${sender.split("@")[0]}\nγ΄ NOTE: Kamu Sudah Terdaftar!\nSilahkan Ketik ${prefix}menu`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*γGROUP ONLYγ*`
}

exports.ownerb = () => {
	return`*γOWNER BOT ONLYγ*`
}

exports.ownerg = () => {
	return`*γOWNER GROUP ONLYγ*`
}

exports.admin = () => {
	return`*γADMIN GROUP ONLYγ*`
}

exports.badmin = () => {
	return`*γBOT HARUS JADI ADMINγ*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner Dehan β’ BOT, Laporan palsu atau mainΒ² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*γ Format salah atau salah ketik*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*γ REGISTRASI γ*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (prefix, pushname, namaUser, umurUser, serialUser, time, sender, _registered) => {
	return`β­*γ REGISTERED AS γ*
βγ Nomor mu telah terdaftar sebagai
ββ­βββββββββββββββββ
ββγ Nickname:
βββγ΄ ${pushname}
ββ°ββββββββββββββββββ?
ββ­ββββββββββββββββββ―
ββγ Nama:
βββγ΄ ${namaUser}
ββ°ββββββββββββββββββ?
ββ­ββββββββββββββββββ―
ββγ Umur:
βββγ΄ ${umurUser} Tahun
ββ°ββββββββββββββββββ?
ββ­ββββββββββββββββββ―
ββγ Mentioning:
βββγ΄ @${sender.split("@")[0]}
ββ°ββββββββββββββββββ?
ββ­ββββββββββββββββββ―
ββγ Link Wa.Me:
βββγ΄ wa.me/${sender.split("@")[0]}
ββ°ββββββββββββββββββ?
ββ­ββββββββββββββββββ―
ββγ Waktu Pendaftaran:
βββγ΄ ${time}
ββ°ββββββββββββββββββ?
ββ­ββββββββββββββββββ―
ββγ Nomor Serial:
βββγ΄ ${serialUser}
ββ°ββββββββββββββββββ?
ββ­ββββββββββββββββββ―
βγ Total User:
βγ ${_registered.length}
βγ NOTE : Silahkan ketik ${prefix}menu
ββ°ββββββββββββββββββ?
β°βββββββββββββββββββ―`
}

exports.cmdnf = (prefix, pushname, command) => {
	return`Maaf ${pushname}\ncommand *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*γ SELAMAT γ*
 β­βββββββββββββββββ
γ Nama : ${pushname}
γ Nomer : ${sender.split("@")[0]}
γ Xp : ${getLevelingXp(sender)}
γ Limit : +3
γ Pangkat : ${role}
γ Level : ${getLevel} β ${getLevelingLevel(sender)}
 β°βββββββββββββββββ
`}
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/62895330379186\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (pushname, limitCounts, sender) => {
	return`
*γ LIMIT COUNT γ*
 β­βββββββββββββββββ
γ Username: ${pushname}
γ Nomor: @${sender.split("@")[0]}
γ Web Api: wa.me/${sender.split("@")[0]}
γ sisa limit anda : ${limitCounts}
 β°βββββββββββββββββ
NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}
exports.hitcount = (pushname, hitCounts, sender) => {
	return`
*γ LIMIT COUNT γ*
 β­βββββββββββββββββ
γ Username: ${pushname}
γ Nomor: @${sender.split("@")[0]}
γ Web Api: wa.me/${sender.split("@")[0]}
γ sisa limit anda : ${hitCounts}
 β°βββββββββββββββββ
NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}
exports.satukos = () => {
	return`*Tambah parameter 1(Untuk On) atau 0(Untuk Off)`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`
γ *γ ATM γ*
 β­βββββββββββββββββ
γ Name: ${pushname}
γ Nomor: ${sender.split("@")[0]}
γ Uang: ${uangkau}
 β°βββββββββββββββββ
`}
