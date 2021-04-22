
//
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const request = require('request')
const crypto = require('crypto')
const util = require('util')
const imgbb = require('imgbb-uploader')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const ms = require('parse-ms')
const toMs = require('ms')
const { mimeTypes } = require('file-type')
const speed = require('performance-now')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { uploadImages } = require('./src/fetcher')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Dehanjing ヅ\n' //ganti ae
            + 'ORG: Pengembang Dehan • BOT;\n' //ganti ae
            + 'TEL;type=CELL;type=VOICE;waid=62895333381439:+62 895-3333-81439\n' //ganti ae
            + 'END:VCARD'
const vcard1 = 'BEGIN:VCARD\n'
             + 'VERSION:3.0\n'
             + 'FN:Senpaii Han デ\n' //ganti ae
             + 'ORG: CEO Dehan • BOT;\n' //ganti ae
             + 'TEL;type=CELL;type=VOICE;waid=6281342474954:+6281342474954\n' //ganti ae
             + 'END:VCARD'
prefix = '#' //ganti sesuai selera
name = 'Dehan • BOT' //ganti ae
blocked = []   
limitawal = 999 //trsrh
memberlimit = 0 //trsrh
numbernye = '0' //Nomor fake reply
cr = '*Dehan • BOT VERIFFIED ✔*' //ganti ae
lel = 'YOUR_APIKEY' // lolhuman apikey
topz = 'YOUR_APIKEY' // tobz apikey
vtir = 'YOUR_APIKEY' // vhtear apikey
leys = 'YOUR_APIKEY' // leyscoder apikey
xtim = 'YOUR_APIKEY' // xteam apikey
yutup = `https://youtube.com/channel/UCQ5vr4WbsabL5JMZV73mKWg`
owmner = '62895333381439' //ganti ae
/******** OWNER NUMBER**********/
const ownerNumber = ["62895333381439@s.whatsapp.net","6281342474954@s.whatsapp.net",`12564003030@s.whatsapp.net`]
const pacarNumber = ["6281342474954@s.whatsapp.net"]
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antivir = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const antiporn = JSON.parse(fs.readFileSync('./database/group/antiporn.json'))
const publik = JSON.parse(fs.readFileSync('./database/group/publik.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const lepgc = JSON.parse(fs.readFileSync('./database/bot/lepgc.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
/*********** END LOAD ***********/


/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             const getAllPremiumUser = () => {
		const array = []
		Object.keys(prem).forEach((i) => {
		array.push(prem[i].id)
		})
		return array
		}
        const getPremiumExpired = (sender) => {
		let position = null
		Object.keys(prem).forEach((i) => {
		if (prem[i].id === sender) {
		position = i 
		}
	})
		if (position !== null) {
		return prem[position].expired 
	}
} 
        const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(prem).forEach((i) => {
		if (Date.now() >= prem[i].expired) {
		position = i 
		}
	}
)
		if (position !== null) {
		console.log(`Premium expired: ${prem[position].id}`)
		prem.splice(position, 1)
		fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem)) 
		}
	    }, 1000)
}
     
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}H ${pad(minutes)}MIN ${pad(seconds)}S`
}

/********** FUNCTION ***************/

async function starts() {
    const dehan = new WAConnection()
    dehan.logger.level = 'warn'
    dehan.on('qr', () => {
        const time_connecting = moment.tz('Asia/Makassar').format('HH:mm:ss')
        console.log(color(time_connecting, "white"), color("[  STATS  ]", "red"), "Scan QR Kode nya di Whatsapp Web")
    })
    fs.existsSync('./dehante.json') && dehan.loadAuthInfo('./dehante.json')
    dehan.on('connecting', () => {
        const time_connecting = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color(time_connecting, "white"), color("[  STATS  ]", "blue"), "Connecting...")
    })
    dehan.on('open', () => {
        const time_connect = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color(time_connect, "white"), color("[  STATS  ]", "green"), "Connected")
    })
    await dehan.connect({ timeoutMs: 30 * 1000 })
    fs.writeFileSync('./dehante.json', JSON.stringify(dehan.base64EncodedAuthInfo(), null, '\t'))

dehan.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await dehan.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await dehan.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/8xtkQ9W/20210331-130348.png'
				}
				teks = `
╭──────────────────
ぐ NEWMEMBER DI GROUP ${mdata.subject}
〴 Nomor: wa.me/${num.split('@')[0]}
〴 Mention: @${num.split('@')[0]}
〴 *JANGAN LUPA INTRO BIAR GROUP NYA RAME!*
╰──────────────────`
				let buff = await getBuffer(ppimg)
				dehan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	
	dehan.on('group-participants-update', async (anu) => {
		if (!lepgc.includes(anu.jid)) return
		try {
			const mdata = await dehan.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await dehan.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/8xtkQ9W/20210331-130348.png'
				}
				teks = `
╭──────────────────
ぐ [ 1 ] MEMBER KELUAR DARI GROUP
〴 Nomor: wa.me/${num.split('@')[0]}
〴 Mention: @${num.split('@')[0]}
ぐ Nama Group: ${mdata.subject}
〴 *ANGGOTA AMPAS V:*
╰──────────────────`				
                let buff = await getBuffer(ppimg)
				dehan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

            mess = {
            wait: 'SABAR NGAB...',
            success: 'SUKSES!',
            Suksesdidapat: 'Berhasil mendapatkan data',
            wrongFormat: 'Format salah, coba liat lagi di menu',
            wrongBahasa: 'Kode bahasa tidak valid silahkan cek kode bahasa dengan zbahasa',
            invalidLink: 'Linknya mana?',
            error: {
                stick: 'Error!',
                Iv: 'Linknya mokad:v',
                ferr: 'Maaf sepertinya fitur sedang Error',
                api: 'error',
                oke: 'apa yang disuruhkan?',
            },
            only: {
                group: 'Grup only bruh...',
                ownerG: 'Owner grup only bruh...',
                ownerB: 'Lu siapa?',
                admin: 'Mimin grup only bruh...',
                publikG: `Maaf ${name} sekarang dalam mode *PRIVATE*!\nsilahkan cek lagi nanti`,
                Badmin: 'Jadiin gw admin dlu su!'
            }
        }

	dehan.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
    
        dehan.on('chat-update', async (dhn) => {
		try {
            if (!dhn.hasNewMessage) return
            dhn = dhn.messages.all()[0]
			if (!dhn.message) return
			if (dhn.key && dhn.key.remoteJid == 'status@broadcast') return
			if (dhn.key.fromMe) return
	      	global.prefix
			global.blocked
			const content = JSON.stringify(dhn.message)
			const from = dhn.key.remoteJid
			const type = Object.keys(dhn.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			body = (type === 'conversation' && dhn.message.conversation.startsWith(prefix)) ? dhn.message.conversation : (type == 'imageMessage') && dhn.message.imageMessage.caption.startsWith(prefix) ? dhn.message.imageMessage.caption : (type == 'videoMessage') && dhn.message.videoMessage.caption.startsWith(prefix) ? dhn.message.videoMessage.caption : (type == 'extendedTextMessage') && dhn.message.extendedTextMessage.text.startsWith(prefix) ? dhn.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? dhn.message.conversation : (type === 'extendedTextMessage') ? dhn.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && dhn.message.conversation) ? dhn.message.conversation : (type == 'imageMessage') && dhn.message.imageMessage.caption ? dhn.message.imageMessage.caption : (type == 'videoMessage') && dhn.message.videoMessage.caption ? dhn.message.videoMessage.caption : (type == 'extendedTextMessage') && dhn.message.extendedTextMessage.text ? dhn.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			chats = (type === 'conversation') ? dhn.message.conversation : (type === 'extendedTextMessage') ? dhn.message.extendedTextMessage.text : ''
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["6281342474954@s.whatsapp.net"] //ganti ae
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
            const time = moment.tz('Asia/Makassar').format('DD/MM HH:mm:ss')
            const timi = moment.tz('Asia/Makassar').add(30, 'days').calendar();
            const timu = moment.tz('Asia/Makassar').add(20, 'days').calendar();
            const date = new Date().toLocaleDateString()
            const waktu = moment.tz('Asia/Jakarta').format('DD')
            const jam = moment.tz('Asia/Jakarta').format('HH:mm')
			const totalchat = await dehan.chats.all()
			const botNumber = dehan.user.jid
			const sender = isGroup ? dhn.participant : dhn.key.remoteJid
			pushname = dehan.contacts[sender] != undefined ? dehan.contacts[sender].vname || dehan.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await dehan.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const groupOwner = isGroup ? groupMetadata.owner : ''
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isSenderGroupAdmins = groupAdmins.includes(sender) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isLepgc = isGroup ? lepgc.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isAntiporn = isGroup ? antiporn.includes(from) : false
			const isAntivir = isGroup ? antivir.includes(from) : false
			const isPublic = isGroup ? publik.includes(from) : true
			const isOwner = ownerNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium = prem.includes(sender) || isOwner 
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				dehan.sendMessage(from, teks, text, {quoted:dhn})
			}
			const sendMess = (hehe, teks) => {
				dehan.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? dehan.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : dehan.sendMessage(from, teks.trim(), extendedText, {quoted: dhn, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    dehan.sendMessage(from, teks, image, {quoted:dhn})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			dehan.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    dehan.sendMessage(from, audio, mp3, {quoted:dhn})
		    }
	        /*****************END SCURITY FEATURE ********/	
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie V2 ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Mythical ぐ¹'
        } else if (levelRole <= 200) {
            role = 'Mythical ぐ²'
        } else if (levelRole <= 210) {
            role = 'Mythical ぐ³'
        } else if (levelRole <= 220) {
            role = 'Mythical ぐ⁴'
        } else if (levelRole <= 230) {
            role = 'Mythical ぐ⁵'
        } else if (levelRole <= 240) {
            role = 'Mythical ぐ⁶'
        } else if (levelRole <= 250) {
            role = 'Mythical ぐ⁷'
        } else if (levelRole <= 260) {
            role = 'Mythical ぐ⁸'
        } else if (levelRole <= 270) {
            role = 'Mythical ぐ⁹'
        } else if (levelRole <= 280) {
            role = 'Mythical ぐ¹⁰'
        } else if (levelRole <= 290) {
            role = 'Immortal ᜡ➀'
        } else if (levelRole <= 300) {
            role = 'Immortal ᜡ➁'
        } else if (levelRole <= 310) {
            role = 'Immortal ᜡ➂'
        } else if (levelRole <= 320) {
            role = 'Immortal ᜡ➃'
        } else if (levelRole <= 330) {
            role = 'Immortal ᜡ➄'
        } else if (levelRole <= 340) {
            role = 'Immortal ᜡ➅'
        } else if (levelRole <= 350) {
            role = 'Immortal ᜡ➆'
        } else if (levelRole <= 360) {
            role = 'Immortal ᜡ➇'
        } else if (levelRole <= 370) {
            role = 'Immortal ᜡ➈'
        } else if (levelRole <= 380) {
            role = 'Immortal ᜡ➉'
        } else if (levelRole <= 390) {
            role = 'No Life 〄'
        } else if (levelRole <= 400) {
            role = 'No Life 〄¹'
        } else if (levelRole <= 410) {
            role = 'No Life 〄²'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
	}
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return dehan.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: dhn})
                            dehan.sendMessage(from, ind.limitcount(pushname, limitCounts, sender), text, { quoted : dhn})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        dehan.sendMessage(from, ind.limitcount(pushname, limitCounts, sender), text, { quoted : dhn})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    dehan.sendMessage(from, ind.limitend(pushname), text, {quoted: dhn})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (budy.includes("https://chat.whatsapp.com/","Buka tautan ini untuk bergabung ke grup WhatsApp saya: https://chat.whatsapp.com/","Follow this link to join my WhatsApp group: https://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		dehan.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		dehan.sendMessage(from, `╭───────────────────
ぐ *[ LINK DETECTED ]*
〴 Pengirim: wa.me/${sender.split("@")[0]}
ぐ Group Name: ${groupName}
〴 NOTE: GROUP INI TELAH MENGAKTIFKAN FITUR ANTILINK!
╰───────────────────`, text, {quoted: dhn})
		setTimeout( () => {
			dehan.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 500)
		await dehan.sendMessage(from, `bay senpaiiぐ`, text, {quoted: dhn})
	}
	//antivirtex
	if (budy.includes("*๒๒๒๒๒๒๒๒*","๒๒๒๒๒๒๒๒","ดุท้่เึางืผิดุท้่เึางื")) {
	if (!isGroup) return
	if (!isAntivir) return
	if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
	dehan.updatePresence(from, Presence.composing)
	var kik = `${sender.split("@")[0]}@s.whatsapp.net`
	dehan.sendMessage(from, `╭───────────────────
ぐ *[ VIRTEXT DETECTED ]*
〴 Pengirim: wa.me/${sender.split("@")[0]}
ぐ Group Name: ${groupName}
〴 NOTE: GROUP INI TELAH MENGAKTIFKAN FITUR ANTIVIRTEXT!
╰───────────────────`, text, {quoted: dhn })
    setTimeout( () => {
    dehan.groupRemove(from, [kik]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 500)
		await dehan.sendMessage(from, `bay senpaiiぐ`, text, {quoted: dhn})
	}
	//antiporn
if (budy.includes("xvideos.com","redtube.com","simontok.com", "xhamster.com","pornhub.com","xnxx.com","brazzers.com","tube8.com","gotporn.com","tufos.com", "testedefudelidade", "boafoda.com", "sxyprn.com", "chaturbate.com", "beeg.com", "amoporno.com", "youjizz.com", "spankbang.com", "blacked.com", "pornobrasil.blog", "xvideos.blog", "xnxx.blog", "xxxbucetas.net", "maisexo.com", "xvideos-xxx.com", "sambaporno.com", "theporndude.com", "adulto.vip", "pornogratis.vlog", "xvideosfoda.com", "xvideos10.blog", "pornocarioca.com", "chaturbate.com", "fotoscaiunanet.com", "pornochileno.com", "xvideos.red", "porn.com", "4tube.com", "xhamster.com", "xtube.com")){
		if (!isGroup) return
		if (!isAntiporn) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		dehan.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		dehan.sendMessage(from, `╭───────────────────
ぐ *[ PORN DETECTED ]*
〴 Pengirim: wa.me/${sender.split("@")[0]}
ぐ Group Name: ${groupName}
〴 NOTE: GROUP INI TELAH MENGAKTIFKAN FITUR ANTIPORN LINK!
╰───────────────────`, text, {quoted: dhn})
		setTimeout( () => {
			dehan.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 500)
		await dehan.sendMessage(from, `bay senpaiiぐ`, text, {quoted: dhn})
	}
if (messagesC.includes("assalamu'alaikum")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `Waalaikumsalam kak ${pushname}\n${name} disini silahkan ketik ${prefix}menu`, text, {quoted: dhn})
}
if (messagesC.includes("Assalamu'alaikum")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `Waalaikumsalam kak ${pushname}\n${name} disini silahkan ketik ${prefix}menu`, text, {quoted: dhn})
}
if (messagesC.includes("Assalamualaikum")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `Waalaikumsalam kak ${pushname}\n${name} disini silahkan ketik ${prefix}menu`, text, {quoted: dhn})
}
if (messagesC.includes("assalamualaikum")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `Waalaikumsalam kak ${pushname}\n${name} disini silahkan ketik ${prefix}menu`, text, {quoted: dhn})
}
   if (messagesC.includes("mastah")){
     dehan.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/tesmek.webp')
				dehan.sendMessage(from, loli, sticker, { quoted: dhn})
				}
if (messagesC.includes("?menu","?help")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
if (messagesC.includes("$menu","$help")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
  if (messagesC.includes("/menu","/help")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
  if (messagesC.includes("!menu","!menu")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
  if (messagesC.includes("_menu","_menu")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
   if (messagesC.includes("+menu","+menu")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
 if (messagesC.includes("zmenu","zhelp")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
 if (messagesC.includes(".menu",".help")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
 if (messagesC.includes(",menu",",help")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
if (messagesC.includes("@menu","@help")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
if (messagesC.includes("-menu","-help")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
if (messagesC.includes("&menu","&help")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
 if (messagesC.includes("Zmenu","Zhelp")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `[ ❗ ] PREFIX ${name} ADALAH\n*⎝ ${prefix} ⎞*`, text, {quoted: dhn})
}
   if (messagesC.includes("salken","Salken","slkn","Slkn")){
dehan.updatePresence(from, Presence.composing)
dehan.sendMessage(from, `Salken juga kak ${pushname}`, text, {quoted: dhn})
}
 if (messagesC.includes("6281342474954","@6281342474954")){
     dehan.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/dtag.webp')
				dehan.sendMessage(from, loli, sticker, { quoted: dhn})
				}
if (messagesC.includes("+6281342474954","+62 813-4247-4954")){
     dehan.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/dtag.webp')
				dehan.sendMessage(from, loli, sticker, { quoted: dhn})
				}
if (messagesC.includes("@+6281342474954","@+62 813-4247-4954")){
     dehan.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/dtag.webp')
				dehan.sendMessage(from, loli, sticker, { quoted: dhn})
				}
  if (messagesC.includes("dehan","Dehan","dehanjing","Dehanjing")){
     dehan.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/manggil.webp')
				dehan.sendMessage(from, loli, sticker, { quoted: dhn})
				}
	if (budy.includes("*๒๒๒๒๒๒๒๒*","๒๒๒๒๒๒๒๒","ดุท้่เึางืผิดุท้่เึางื","*ดุท้่เึางืผิดุท้่เึาง*ื")){
    dehan.updatePresence(from, Presence.composing)
    dehan.sendMessage(from, `\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n`, text)
 dehan.sendMessage(from, `\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n`, text)
 dehan.sendMessage(from, `\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n`, text)
 dehan.sendMessage(from, `\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n`, text)
 dehan.sendMessage(from, `\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n`, text)
				}
            expiredCheck()
			var premi = '*Gratisan User*'
			if (isPremium) {
			premi = '*Premium User*'
			} 
			if (isOwner) {
			premi = '*Owner Kontol*'
			}
			


             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			
            //private chat message
            if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
            if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
            
            //group message
            if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
            if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
            let authorname = dehan.contacts[from] != undefined ? dehan.contacts[from].vname || dehan.contacts[from].notify : undefined  
            if (authorname != undefined) { } else { authorname = groupName }    
			function addMetadata(packname, author) {	
			if (!packname) packname = 'made by admin'; if (!author) author = 'made by admin';
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
            //Setting menu
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, os_build_number } = dehan.user.phone
                const timings = speed();
                const latesin = speed() - timings 
                uptime = process.uptime()    
                myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
                var tgl = new Date();
                var day = tgl.getDate()
                bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
                const uangku = checkATMuser(sender)
                yDays = ['24','23','22',"21","20","19","18","17","16","15","14","13","12","11","10","9","8","7","6","5","4","3","2","1"];
                var thsDay = tgl.getDay(),
                thsDay = yDays[thsDay];
                const chobhain = `Sisa ${thsDay}Hari menuju Lebaran!`
 /****** GANTI AE ******/
                
const memnu = `╭─────────────────╮
│「 𝗗𝗲𝗵𝗮𝗻 • 𝗕𝗢𝗧 𝗕𝗔𝗦𝗜𝗖 」▕
│╭────────────────╯
│ぐ *IKLAN*
│〴 Link Group: ~
│〴 Nama Group: ~
│〴 Owner Group: ~
│╰─────────────────╮
├──────────────────╯
│ぐ ⎝ *INGFO OWNER* ⎞
│╭─────────────────
│〴 Nama: Dehanjing デ
│〴 Wa: wa.me/62895333381439
│〴 Ig: https://instagram.com/dehan_j1ng
│〴 Gopay: 0895333381439a/n Dehante
│〴 https://bīt.ly/dehante.xyz
│╰─────────────────╮
├──────────────────╯
│ぐ ⎝ *INGFO Dehan • BOT* ⎞
│╭─────────────────
│〴 Nama: ${name}
│〴 Prefix: 「  ${prefix}  」
│〴 Jenis Bot: VIA TERMUX
│〴 Whatsapp Version: ${wa_version}
│〴 RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│〴 MCC : ${mcc}
│〴 MNC : ${mnc}
│〴 Versi OS : ${os_version}
│〴 Merk HP : ${device_manufacturer}
│〴 Versi HP : ${device_model}
│〴 OS Number: ${os_build_number}
│〴 Internet: WiFi / Telkomsel 
│〴 Tipe Network: [ BAILEYS ]
│〴 Runtime: ${kyun(uptime)}
│〴 Speed: ${latesin.toFixed(3)}ms
│〴 Tanggal: ${time}
│〴 Total Chat: ${totalchat.length} Chats
│〴 Total Users: ${_registered.length} Users
│〴 Premium User: ${prem.length} User
│╰─────────────────╮
├──────────────────╯
│ぐ ⎝ *HITUNG MUNDUR* ⎞
│╭─────────────────
│ぐ Hitung Mundur ke Lebaran:
│〴 ${chobhain}
│╰─────────────────╮
├──────────────────╯
│ぐ ⎝ *YOUR INGFO* ⎞
│╭─────────────────
│〴 Nama: ${pushname}
│〴 Uang mu : Rp${uangku}
│〴 Exp: ${reqXp}
│〴 Limit: ${limitawal} / Hari
│〴 Nomer: wa.me/${sender.split("@")[0]}
│〴 Statues: ${premi}
│〴 Registered: [ ${isRegistered ? '✅' : '❌'} ]
│〴 Role: ${role}
│╰─────────────────╮
├──────────────────╯
│ぐ ⎝ *ABOUT* ⎞
│╭─────────────────
│├─ 〴 ${prefix}totaluser
│├─ 〴 ${prefix}tqto [thanks]
│├─ 〴 ${prefix}info
│├─ 〴 ${prefix}mystat
│├─ 〴 ${prefix}snk
│├─ 〴 ${prefix}lpr 
│├─ 〴 ${prefix}request
│├─ 〴 ${prefix}blocklist
│├─ 〴 ${prefix}ping
│├─ 〴 ${prefix}buylimit
│├─ 〴 ${prefix}buypremiumlimit
│╰─────────────────╮
├──────────────────╯
│ぐ ⎝ *LIMIT & UANG & LB* ⎞
│╭─────────────────
│├─ 〴 ${prefix}limit
│├─ 〴 ${prefix}buylimit
│├─ 〴 ${prefix}buypremiumlimit
│├─ 〴 ${prefix}transfer
│├─ 〴 ${prefix}leaderboard
│╰─────────────────╮
├──────────────────╯
│ぐ ⎝ *GROUP MENU* ⎞
│╭─────────────────
│├─ 〴 ${prefix}statusgc
│├─ 〴 ${prefix}ownergc
│├─ 〴 ${prefix}notify [pesan]
│├─ 〴 ${prefix}fitnah [@tag/teks/teks]
│├─ 〴 ${prefix}tagme 
│├─ 〴 ${prefix}infogc 
│├─ 〴 ${prefix}promote [@tag]
│├─ 〴 ${prefix}demote [@tag]
│├─ 〴 ${prefix}tagall
│├─ 〴 ${prefix}mentionall [teks]
│├─ 〴 ${prefix}hidetag
│├─ 〴 ${prefix}banlist
│├─ 〴 ${prefix}blocklist
│├─ 〴 ${prefix}linkgc
│├─ 〴 ${prefix}mining
│├─ 〴 ${prefix}add [628xxxxx]
│├─ 〴 ${prefix}kick [@tag]
│├─ 〴 ${prefix}setname
│├─ 〴 ${prefix}setdesc
│├─ 〴 ${prefix}setpp
│├─ 〴 ${prefix}listadmin
│├─ 〴 ${prefix}linkgc
│├─ 〴 ${prefix}leave
│├─ 〴 ${prefix}mining
│├─ 〴 ${prefix}level
│├─ 〴 ${prefix}grup [buka/tutup]
│├─ 〴 ${prefix}welcome [1/0]
│├─ 〴 ${prefix}left [1/0]
│├─ 〴 ${prefix}nsfw [1/0]
│├─ 〴 ${prefix}antilink [1/0]
│├─ 〴 ${prefix}antiporn [1/0]
│├─ 〴 ${prefix}antivirtex [1/0]
│├─ 〴 ${prefix}leveling [1/0]
│├─ 〴 ${prefix}simih [1/0]
│╰─────────────────╮
├──────────────────╯
│ぐ ⎝ *OWNER MENU* ⎞
│╭─────────────────
│├─ 〴 ${prefix}ceklolhuman [apikey]
│├─ 〴 ${prefix}cekxteam [apikey]
│├─ 〴 ${prefix}creategc [buat grup]
│├─ 〴 ${prefix}readall 
│├─ 〴 ${prefix}eval 
│├─ 〴 ${prefix}addstatus [sw]
│├─ 〴 ${prefix}sendmessage
│├─ 〴 ${prefix}setfakenumber
│├─ 〴 ${prefix}resetfakenumber
│├─ 〴 ${prefix}setnickname
│├─ 〴 ${prefix}setprefix
│├─ 〴 ${prefix}setreply
│├─ 〴 ${prefix}setppbot
│├─ 〴 ${prefix}block
│├─ 〴 ${prefix}unblock
│├─ 〴 ${prefix}leave
│├─ 〴 ${prefix}kickall
│├─ 〴 ${prefix}event [1/0]
│├─ 〴 ${prefix}bc
│├─ 〴 ${prefix}bcgc
│├─ 〴 ${prefix}clone [@tag]
│├─ 〴 ${prefix}clearall
│╰─────────────────╮
├──────────────────╯
│ぐ ⎝ *THANKS TO* ⎞
│╭─────────────────
│├─ 〴 dehante.xyz
│├─ 〴 ALL CREATOR BOT
│├─ 〴 ALL MASTAH <3
│├─ 〴 USER Dehan • BOT
│├─ 〴 SUPPORT ME! 
│╰─────────────────
├─────────────────╮
│「 𝗗𝗲𝗵𝗮𝗻 • 𝗕𝗢𝗧 𝗕𝗔𝗦𝗜𝗖 」▕
╰─────────────────╯`
			switch(command) {
		case 'transfer':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 3000 ) return reply(`minimal transfer 3000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('62895333381439@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nぐ Pengiriman uang telah sukses\nぐ Dari: +${sender.split("@")[0]}\nぐ Ke: +${tujuan}\nぐ Jumlah Transfer: ${jumblah}\nぐ Pajak: ${fee}`)
                		await limitAdd(sender)
                		break
                case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				admin.push(`${adm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${adm} `)
				break
                case 'wakillist':
				dehan.updatePresence(from, Presence.composing) 			
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${admm.length}`
				dehan.sendMessage(from, teks.trim(), extendedText, {quoted: dhn, contextInfo: {"mentionedJid": adm}})
				break
               case 'premium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
				reply(`Berhasil menjadi premium wa.me/${premm} `)
				break
		case 'unpremium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				break
		  case 'cekpremium':
			
		   	if (!isPremium) return reply('Maaf kamu bukan user premium!')	
		  const cekExp = ms(getPremiumExpired(sender) - Date.now())
				
		  reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
			
		  break 
				case 'addpremium':
		if (!isOwner) return reply(ind.ownerb())
			expired = "60d"
			const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
			prem.push(pnom) 
			fs.writeFileSync('./database/user/premium.json',JSON.stringify(prem))
			reply(`「 PREMIUM ADD 」*\n*Nomor*: ${args[0]}\n*Expired* : 60 DAYS\n*thank for order premium*`)
		break
		case 'delpremium':
	if (!isOwner) return reply(ind.ownerb())
			const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
			var arr = prem
			for( var dp = 0; dp < arr.length; dp++){ 
			if ( arr[dp] === hnom) { 
			arr.splice(dp, 1); 
			dp--; 
			fs.writeFileSync('./database/user/premium.json',JSON.stringify(arr))
			}
			}
			reply(`*「 PREMIUM DELETE 」*\n*Name* : ${hnom}\n*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`)
			break 
		case 'premlist':
		case 'premiumlist':
			if (isBanned) return reply('Maaf kamu sudah terbenned!')
					  		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
			let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
			let nomorList = 0
			const deret = getAllPremiumUser()
			const arrayPremi = []
			for (let i = 0; i < deret.length; i++) {
			const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
			arrayPremi.push(getAllPremiumUser()[i])
			nomorList++
			listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
			}
			await reply(listPremi)
		break
                case 'bann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'banlist':
				dehan.updatePresence(from, Presence.composing) 				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				dehan.sendMessage(from, teks.trim(), extendedText, {quoted: dhn, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 30; i++) {
					nom++
					leaderboardlvl += `*ぐ ${nom}* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*ぐ ${nom}* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 30 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'dompet':
		case 'bank':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`
*「 PEMBAYARAN BERHASIL 」*
ぐ Pengirim: Owner Dehante
ぐ Penerima: ${pushname}
ぐ Nominal pembelian: ${payout}
〴 Harga limit: ${koinPerlimit}/limit
〴 Sisa uang mu: ${checkATMuser(sender)}
〴 Proses berhasil dengan nomer pembayaran
ぐ Serial Number: ${createSerial(20)}
`)
				} 
				break
		case 'buypremiumlimit':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`
*「 PEMBAYARAN BERHASIL 」*
ぐ Pengirim: Owner Dehante
ぐ Penerima: ${pushname}
ぐ Nominal pembelian: ${payout}
〴 Harga limit: ${koinPerlimit}/limit
〴 Sisa uang mu: ${checkATMuser(sender)}
〴 Proses berhasil dengan nomer pembayaran
ぐ Serial Number: ${createSerial(20)}
`)
				} 
				break
		case 'giftlimit':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (!isAdmin) return reply('*Only Admin & Owner Kami!*')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break
                
		case 'limit':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				checkLimit(sender)
				break
		
		case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					dehan.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dehan.downloadAndSaveMediaMessage(enmedia)
					await dehan.updateProfilePicture(botNumber, media)
					dehan.sendMesaage(from, `ぐ Berhasil mengubah Profile ${name}`, text, {quoted: dhn})
					break 
		case 'setppbott':
				if (!isAdmin) return reply('*Only Admin bot*')
					dehan.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dehan.downloadAndSaveMediaMessage(enmedia)
					await dehan.updateProfilePicture(botNumber, media)
					dehan.sendMesaage(from, `ぐ Berhasil mengubah Profile ${name}`, text, {quoted: dhn})
					break
		case 'brainly':
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					brien = args.join(" ")
					brainly(`${brien}`).then(res => {
					teks = '╭────────────────────\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n╰────────────────────\n`
					}
					dehan.sendMessage(from, teks, text, {quoted: dhn, detectLINKs: false})
					console.log(res)
					})
					await limitAdd(sender)
					break 
		case 'bcgc':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers 
					tagss = dhn.participant
					if (isMedia && !dhn.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dhn
						buffer = await dehan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dehan.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
		
					
                case 'kickall':
					if (!isOwner) return reply(ind.ownerb())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					dehan.groupRemove(from, members_id)
					break
		case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					dehan.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'setreplyy':
				if (!isAdmin) return reply('*Only Admin bot*')
					dehan.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis(prefix, pushname, sender))
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(15)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 200) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 5000) return reply(`your age is too  old maximum 5000 years`)
                			if (umurUser < 5) return reply(`your age is too young minimum 7 years`)
                					try {
								ppimg = await dehan.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i.ibb.co/8xtkQ9W/20210331-130348.jpg'
						     	}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    		    let buff = await getBuffer(ppimg)
                    			await dehan.sendMessage(from, buff, image, {caption: ind.registered(pushname, namaUser, umurUser, serialUser, time, sender, _registered), quoted: dhn})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await dehan.sendMessage(from, ind.registered(pushname, namaUser, umurUser, serialUser, time, sender, _registered), text, {quoted: dhn, contextInfo: { mentionedJid: [sender]}})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
		case 'mining':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
		
		case '999ms':
		case 'ping':			
		case 'speed':
            const timestamp = speed();
                const latensi = speed() - timestamp 
                dehan.sendMessage(from, `ぐ Network: TELKOMSEL / WiFi\nぐ Speed: ${latensi.toFixed(3)}ms`, text, { quoted: dhn})
                    break
        case 'menu':
        case 'help':
        case 'bot':
        case 'p':
                if (!isRegistered) return reply( ind.noregis(prefix, pushname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                
                dehan.sendMessage(from, memnu, text, {contextInfo: { mentionedJid: [sender] }, quoted: dhn})
                break     
		case 'donasi':
		case 'donate':		
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					dehan.sendMessage(from, donasi(), text, {quoted: dhn})
					break
		case 'bahasa':			
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					dehan.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
					break
		case 'kodenegara':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					dehan.sendMessage(from, negara(), text)
					await limitAdd(sender)
					break
		case 'del':
		case 'd':
		case 'delete':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroupAdmins) return reply(ind.admin())
					dehan.deleteMessage(from, { id: dhn.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await reply(`[ ✅ ] Berhasil menghapus pesan ${name}`)
					await limitAdd(sender)
					break
		case 'level':
					 // Fix Bug By ItsmedXSec404				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `ぐ ⎝ LEVEL ⎞
├─ ぐ Name: ${pushname}
├─ ぐ Nomor: @${sender.split("@")[0]}
├─ ぐ User XP: ${userXp}/${requiredXp}
└─ ぐ User Level: ${userLevel}\n`
					dehan.sendMessage(from, resul, text, { quoted: dhn})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'info':
					me = dehan.user
					uptime = process.uptime()
					teks = `ぐ ⎝ INGFO OWNER ⎞
〴 Owner: Dehante
〴 No Owner: wa.me/62895333381439
〴 Ig owner: www.instagram.com/dehan_j1ng
〴 Gopay: 0895333381439 A/n Dehante
━━━━━━━━━━━━━━━━━━━━
ぐ ⎝ INGFO BOT ⎞
〴 Nama Bot: ${me.name}
ぐ Nomor bot: @${me.jid.split('@')[0]}
〴 Prefix: ${prefix}
〴 Total block contact: ${blocked.length}
〴 Runtime: ${kyun(uptime)}
━━━━━━━━━━━━━━━━━━━━
ぐ Ketik: ${prefix}lpr Untuk melaporkan admin bot melalui bot
ぐ Ketik: ${prefix}owner untuk menghubungi admin bot kami.`
					buffer = await getBuffer(me.imgUrl)
					dehan.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'snk':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					me = dehan.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan ${name}*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					dehan.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':  
		if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const bug = body.slice(5)
					if (pesan.length > 300) return dehan.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: dhn})
					var nomor = dhn.participant
					teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					dehan.sendMessage('62895333381439@s.whatsapp.net', options, text, {quoted: dhn})
					reply('Masalah telah di laporkan ke owner Dehan • BOT, Laporan palsu atau main² tidak akan ditanggapi.')
					break
		case 'request':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return dehan.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: dhn})
					var nomor = dhn.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					dehan.sendMessage('62895333381439@s.whatsapp.net', options, text, {quoted: dhn})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER Dehan • BOT, Requests palsu atau main² tidak akan ditanggapi.')
					break
		case 'blocklist': 
			if (!isOwner) return reply(ind.ownerb())
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `ぐ @${block.split('@')[0]}\n`
					}
					teks += `〴 *Total* : ${blocked.length}`
					dehan.sendMessage(from, teks.trim(), extendedText, {quoted: dhn, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
                dehan.updatePresence(from, Presence.composing)
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					const tikar = fs.readFileSync('./mp3/hidetag.webp')
					var value = body.slice(9)
					var group = await dehan.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: dhn
					}
					dehan.sendMessage(from, options, text)
					dehan.sendMessage(from, tikar, sticker, {quoted: dhn})
					await limitAdd(sender)
					break
		case 'ocr': 				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !dhn.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dhn
						const media = await dehan.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait(pushname))
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
		case 'gtts':
		case 'tts':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return dehan.sendMessage(from, `Diperlukan kode bahasa kak!!\nsilahkan ketik ${prefix}bahasa`, text, {quoted: dhn})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return dehan.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: dhn})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							dehan.sendMessage(from, buffer, audio, {quoted: dhn, duration: 99999, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setlimitt':
		case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'tiktokstalk':				
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				try {
						if (args.length < 1) return dehan.sendMessage(from, '*Username mana kak?', text, {quoted: dhn})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait(pushname))
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						dehan.sendMessage(from, buffer, image, {quoted: dhn, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*(ERROR)* *Kemungkinan username tidak valid*')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
                 case 'linkgrup':
                   if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await dehan.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				dehan.sendMessage(from, yeh, text, {quoted: dhn})
				await limitAdd(sender)
				break
		case 'tagall':
		   if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `〴 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`ぐ═〘  *Dehan • BOT TAG*  〙`+teks+'ぐ═〘 𝗗𝗲𝗵𝗮𝗻 • 𝗕𝗢𝗧 𝗧𝗔𝗚 〙', members_id, true)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await dehan.chats.all()
					dehan.setMaxListeners(25)
					for (let _ of anu) {
						dehan.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'blockk':
				 dehan.updatePresence(from, Presence.composing) 
				 dehan.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					dehan.blockUser (`${body.slice(8)}@c.us`, "add")
					dehan.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				    dehan.blockUser (`${body.slice(10)}@c.us`, "remove")
					dehan.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'block':
				 dehan.updatePresence(from, Presence.composing) 
				 dehan.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					dehan.blockUser (`${body.slice(7)}@c.us`, "add")
					dehan.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    dehan.blockUser (`${body.slice(9)}@c.us`, "remove")
					dehan.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':		
                 if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					dehan.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					dehan.updatePresence(from, Presence.composing) 
					dehan.sendMessage(from, 'Sampai jumpa 👋', text) // ur cods
					}, 0)
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await dehan.chats.all()
					if (isMedia && !dhn.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dhn
						buff = await dehan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dehan.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Dehan • BOT BC 」*\nぐ Teks:\n〴 [ ${body.slice(4)} ]`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await dehan.chats.all()
					if (isMedia && !dhn.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dhn
						buff = await dehan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dehan.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Dehan • BOT BC 」*\nぐ Teks:\n〴 [ ${body.slice(4)} ]`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await dehan.downloadAndSaveMediaMessage(dhn)
					await dehan.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak Contoh 62812345')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dehan.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
		case 'gc':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						dehan.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						dehan.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  dehan.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: dhn})
                  dehan.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: dhn} )
					break  
		 case 'senpaihan':
		       dehan.sendMessage(from, {displayname: "Dehan", vcard: vcard1}, MessageType.contact, {quoted: dhn})
		       dehan.sendMessage(from, 'Senpaii Dehann!' ,MessageType.text, {quoted: dhn})
		       break
           case 'setname':
              if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					dehan.updatePresence(from, Presence.composing)
					nmgece = args.join(" ")
					dehan.groupUpdateSubject(from, `${nmgece}`)
					await dehan.sendMessage(from, `Succes, Ganti Nama Grup menjadi *${nmgece}*`, text, {quoted: dhn})
					break
                case 'setdesc':
                  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					inidesc = args.join(" ")
					dehan.groupUpdateDescription(from, `${inidesc}`)
					dehan.sendMessage(from, `Succes, Ganti Deskripsi Grup ${groupName} menjadi\n\n”${inidesc}” ぐ`, text, {quoted: dhn})
					break
           case 'demote':
					  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					  if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (dhn.message.extendedTextMessage === undefined || dhn.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = dhn.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						dehan.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`ぐ Demoting!\nぐ @${mentioned[0].split('@')[0]} Sowwy!\n${pushname} Demoting you from Admin Group to Member Group in\nぐ Name Group: ${groupName}`, mentioned, true)
						dehan.groupDemoteAdmin(from, mentioned)
					}
					break
			case 'promote':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (dhn.message.extendedTextMessage === undefined || dhn.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = dhn.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Promoted by ${pushname}:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						dehan.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`ぐ Promoted!\nぐ @${mentioned[0].split('@')[0]} Congrats!\n${pushname} Promoted you to be an Admin Group of\nぐ Name Group: ${groupName}`, mentioned, true)
						dehan.groupMakeAdmin(from, mentioned)
					}
					break
		case 'kick':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (dhn.message.extendedTextMessage === undefined || dhn.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = dhn.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Asek jatah kick, otw kick* 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						dehan.groupRemove(from, mentioned)
					} else {
						mentions(`ぐ Kicking!\nぐ @${mentioned[0].split('@')[0]} Kicked!\n${pushname} Kicked @${mentioned[0].split('@')[0]} from group\nぐ Name Group: ${groupName}`, mentioned, true)
						dehan.groupRemove(from, mentioned)
					}
					break
		case 'listadmin':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					teks = `ぐ List Admin of Group\nぐ Group Name: ${groupName}\nぐ Total Admins: ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		case 'simih':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply(`Sukses mengaktifkan mode simi di group *${groupName}* ✔`)
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply(`Sukses menonaktifkan mode simi di group *${groupName}* ✔️`)
					} else {
						reply(ind.satukos())
					}
					break
		case 'nsfw':
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply(`Sukses mengaktifkan mode nsfw di group *${groupName}* ✔️`)
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply(`Sukses menonaktifkan mode nsfw di group *${groupName}* ✔️`)
					} else {
						reply(ind.satukos())
					}
					break
		case 'leveling':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
					case 'autosticker':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isAutoStickerOn) return reply('*Fitur Welcome sudah aktif sebelum nya')
						autosticker.push(from)
						fs.writeFileSync('./database/bot/autosticker.json', JSON.stringify(autosticker))
						reply(`❬ SUCCSESS ❭ mengaktifkan fitur Welcome di group *${groupName}*`)
					} else if (Number(args[0]) === 0) {
						autosticker.splice(from, 1)
						fs.writeFileSync('./database/bot/autosticker.json', JSON.stringify(autosticker))
						reply(`❬ SUCCSESS ❭ menonaktifkan fitur Welcome di group *${groupName}*`)
					} else {
						reply(ind.satukos())
					}
					break
		case 'welcome':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur Welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply(`❬ SUCCSESS ❭ mengaktifkan fitur Welcome di group *${groupName}*`)
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply(`❬ SUCCSESS ❭ menonaktifkan fitur Welcome di group *${groupName}*`)
					} else {
						reply(ind.satukos())
					}
					break
					
					case 'left':
		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isLepgc) return reply('*Fitur Left sudah aktif sebelum nya')
						lepgc.push(from)
						fs.writeFileSync('./database/bot/lepgc.json', JSON.stringify(lepgc))
						reply(`❬ SUCCSESS ❭ mengaktifkan fitur Left di group*${groupName}*`)
					} else if (Number(args[0]) === 0) {
						lepgc.splice(from, 1)
						fs.writeFileSync('./database/bot/lepgc.json', JSON.stringify(lepgc))
						reply(`❬ SUCCSESS ❭ menonaktifkan fitur Left di group *${groupName}*`)
					} else {
						reply(ind.satukos())
					}
					break
					
					
					
                 case 'antilink':
                   if (!isRegistered) return reply( ind.noregis(prefix, pushname))
                              if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(`Sukses mengaktifkan anti link group di group *${groupName}* ✔️`)
						dehan.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(`Sukes menonaktifkan anti link group di group *${groupName}* ✔️`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antivirtex':
                   if (!isRegistered) return reply( ind.noregis(prefix, pushname))
                              if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntivir) return reply('Anti Virtex sudah aktif')
						antivir.push(from)
						fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivir))
						reply(`Sukses mengaktifkan anti virtext di group *${groupName}* ✔️`)
						
					} else if (Number(args[0]) === 0) {
						if (!isAntivir) return reply('Mode anti virtext sudah disable')
						antivir.splice(from, 1)
						fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivir))
						reply(`Sukes menonaktifkan anti virtext di group *${groupName}* ✔️`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antiporn':
                   if (!isRegistered) return reply( ind.noregis(prefix, pushname))
                              if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiporn) return reply('Anti porn group sudah aktif')
						antiporn.push(from)
						fs.writeFileSync('./database/group/antiporn.json', JSON.stringify(antiporn))
						reply(`Sukses mengaktifkan Anti porn di group *${groupName}* ✔️`)
						dehan.sendMessage(from,`Perhatian kepada seluruh member Anti porn aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiporn) return reply('Mode Anti porn group sudah disable')
						antiporn.splice(from, 1)
						fs.writeFileSync('./database/group/antiporn.json', JSON.stringify(antiporn))
						reply(`Sukes menonaktifkan Anti porn di group *${groupName}* ✔️`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
                    case 'grouplist':
        if (!isRegistered) return reply(ind.noregis())
        dehan.updatePresence(from, Presence.composing) 
        teks = `\`\`\`Ini adalah list 𝗗𝗲𝗵𝗮𝗻 • 𝗕𝗢𝗧 𝗕𝗔𝗦𝗜𝗖 :\n\n\`\`\``
        no = 0
        for (let hehehe of groupId) {
        no += 1
        teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
        }
        teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
        dehan.sendMessage(from, teks.trim(), extendedText, {quoted: dhn})
        break
                 case 'event':
   if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Admin & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply(`❬ SUCCSESS ❭ mengaktifkan fitur event di group *${groupName}*`)
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply(`❬ SUCCSESS ❭ menonaktifkan fitur event di group *${groupName}*`)
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
                  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply(`❬ SUCCSESS ❭ mengaktifkan fitur event di group *${groupName}*`)
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply(`❬ SUCCSESS ❭ menonaktifkan fitur event di group *${groupName}*`)
					} else {
						reply(ind.satukos())
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (dhn.message.extendedTextMessage === undefined || dhn.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = dhn.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await dehan.getProfilePicture(id)
						buffer = await getBuffer(pp)
						dehan.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
case 'mentionall':
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				  if (!isRegistered) return reply( ind.noregis(prefix, pushname))		
			    		if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `〴 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`ぐ══〘  *${body.slice(12)}*  〙══`+teks+'ぐ═〘 Dehan • BOT 〙', members_id, true)
					break
  case 'asupan':
				dehan.updatePresence(from, Presence.composing) 
      if (!isRegistered) return reply( ind.noregis(prefix, pushname))
      		if (isBanned) return reply('Maaf kamu sudah terbenned!')
      		reply(ind.wait(pushname))
				 data = fs.readFileSync('./src/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                dehan.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: dhn})
				break
                        case 'sticker':
                    case 'stiker':
                    case 's':
                    case 'sgif':
                    case 'stickergif':
                    case 'stikergif':
                           	if (isBanned) return reply('Maaf kamu sudah terbenned!')
					  		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
				if ((isMedia && !dhn.message.videoMessage || isQuotedImage) && args.length == 0) {
					
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dhn

const media = await dehan.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.webp')

await ffmpeg(`./${media}`)

	.input(media)

		.on('start', function (cmd) {

				console.log(`Started : ${cmd}`)

	})

	.on('error', function (err) {

		console.log(`Error : ${err}`)

		fs.unlinkSync(media)

	})

	.on('end', function () {

		console.log('Finish')

		exec(`webpmux -set exif ${addMetadata('6281342474954','Dehan BOT')} ${ran} -o ${ran}`, async (error) => {

		if (error) return reply("gagal")

		dehan.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: dhn})
		fs.unlinkSync(media)	

		fs.unlinkSync(ran)	

		})

		/*dehan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: dhn})

		fs.unlinkSync(media)

		fs.unlinkSync(ran)*/

	})

	.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

	.toFormat('webp')

	.save(ran)

		} else if ((isMedia && dhn.message.videoMessage.seconds < 11 || isQuotedVideo && dhn.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {

const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dhn

const media = await dehan.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.webp')

wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					dehan.sendMessage(from, wew, text, { quoted: dhn })

	await ffmpeg(`./${media}`)

	.inputFormat(media.split('.')[1])

	.on('start', function (cmd) {

	console.log(`Started : ${cmd}`)

	})

	.on('error', function (err) {

		console.log(`Error : ${err}`)

		fs.unlinkSync(media)

		tipe = media.endsWith('.mp4') ? 'video' : 'gif'

		reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)

	})

	.on('end', function () {

		console.log('Finish')

		exec(`webpmux -set exif ${addMetadata('6281342474954','Dehan BOT')} ${ran} -o ${ran}`, async (error) => {

			if (error) return reply("gagal")

			dehan.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: dhn })

			fs.unlinkSync(media)	

			fs.unlinkSync(ran)

	})

		/*dehan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: dhn})

		fs.unlinkSync(media)

		fs.unlinkSync(ran)*/

	})

	.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

	.toFormat('webp')

	.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {

const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dhn

const media = await dehan.downloadAndSaveMediaMessage(encmedia)

ranw = getRandom('.webp')

ranp = getRandom('.png')

wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					dehan.sendMessage(from, wew, text, { quoted: dhn })

keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'

await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {

	fs.unlinkSync(media)

	let buffer = Buffer.from(res.base64img, 'base64')

	fs.writeFileSync(ranp, buffer, (err) => {

	if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')

	})

	exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${ranw}`, (err) => {

		fs.unlinkSync(ranp)

		exec(`webpmux -set exif ${addMetadata('6281342474954','Dehan BOT')} ${ranw} -o ${ranw}`, async (error) => {

		dehan.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: dhn })

		fs.unlinkSync(ranw)

		})

		//dehan.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: dhn})

	})

})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {

const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dhn

const media = await dehan.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.webp')

await ffmpeg(`./${media}`)

	.on('start', function (cmd) {

		console.log('Started :', cmd)

	})

	.on('error', function (err) {

		fs.unlinkSync(media)

		console.log('Error :', err)
	})
	.on('end', function () {

		console.log('Finish')

		fs.unlinkSync(media)

		dehan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: dhn})

		fs.unlinkSync(ran)

	})

	.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])

	.toFormat('webp')

	.save(ran)*/
					
	} else {

reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					
}
					
break
		case 'fitnah':
                 		if (isBanned) return reply('Maaf kamu sudah terbenned!')
                 		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))	
                 		 	if (!isGroup) return reply(ind.groupo())
           			if (args.length < 1) return reply(`ぐ Contoh :\n〴 ${prefix}fitnah [@tag/pesan/balasanbot]`)
				var gh = body.slice(8)
				mentioned = dhn.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("/")[0];
					var target = gh.split("/")[1];
					var bets = gh.split("/")[2];
					dehan.sendMessage(from, `${bets}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break	
			case 'infogrup':
			case 'infogc':
			case 'infogroup':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					  		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
                dehan.updatePresence(from, Presence.composing)
                 reply(ind.wait(pushname))
                	if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
                try {
					ppUrl = await dehan.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i.ibb.co/8xtkQ9W/20210331-130348.jpg'
					}
			    buffer = await getBuffer(ppUrl)
		        dehan.sendMessage(from, buffer, image, {quoted: dhn, caption: `ぐ Name: ${groupName}\nぐ Group Member: ${groupMembers.length} Member\nぐ Group Admin: ${groupAdmins.length} Admin\nぐ Group Desc:\n${groupDesc}`})
                break
			case 'tagme':
			case 'kacang':
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					  		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))			
			var nem = dhn.participant
			const tag = {
			text: `ぐ Name: ${pushname}\nぐ Nomor: @${nem.split("@")[0]}\nぐ wa.me: wa.me/${nem.split("@")[0]}`,
			contextInfo: { mentionedJid: [nem] }
			}
			dehan.sendMessage(from, tag, text, {quoted: dhn})
			break
			case 'setfakereplynumber':
			case 'setfakenumber':
					if (!isOwner) return reply(ind.ownerb())
					
					if (args.length < 1) return reply('Mana Nomernya tolol')
					numbernye = body.slice(16)
					reply(`ぐ Fake Reply Number berhasil diubah ke @${numbernye.split('@')[0]}`)
				
					break 
			case 'resetfakenumber':
					
					if (!isOwner) return reply(ind.ownerb())
					
					numbernye = 0
					reply(`Berhasil Reset Fake Number Ke semula!`)
				
					break 
			case 'ownergc':
	dehan.updatePresence(from, Presence.composing) 
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
					  		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					  		if (!isGroup) return reply(ind.groupo())
				
	hayukkkk = {
	text: `ぐ Owner dari Group\nぐ ${groupName}\nぐ Adalah @${groupOwner.split('@')[0]}\n〴 Web Api: wa.me/${groupOwner.split('@')[0]}`,
						
	contextInfo: { mentionedJid: [groupOwner] }
	}
	dehan.sendMessage(from, hayukkkk, text, {quoted: dhn})
	break
			case 'setnickbot':
                    
			case 'setnickname':
			 if (!isOwner) return reply(ind.ownerb())
			entah = args.join(" ")
                   
			 dehan.updateProfileName(entah).then(() => {
                      
			   reply(`Sukses mengubah ke ${entah}`)
                  
			     }).catch((err) => { reply(`Error: ${err}`) })
                   
			      break
			case 'notify':
			case 'notif':
dehan.updatePresence(from, Presence.composing)
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
					  		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					  		   	if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					
					teks = args.join(" ")
teks = `ぐ Notify dari @${sender.split("@")[0]}\nぐ Pesan : ${teks}`
group = await dehan.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: dhn
} 
await dehan.sendMessage(from, options, text)
break
			case 'toimg':			
                  
 	if (isBanned) return reply('Maaf kamu sudah terbenned!')
					  		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
			      reply(ind.wait(pushname))
			
				if (!isQuotedSticker) return reply('*Reply/Tag sticker!*')
					
					encmedia = JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dehan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						dehan.sendMessage(from, buffer, image, {quoted: dhn, caption: '*DAH JADI SETAN* '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                    case 'mystat': 
                    case 'mystatus':
				
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = dehan.user.phone
                anu = process.uptime()
                teskny = `ぐ NAMA : ${dehan.user.name}
ぐ BROWSER : ${dehan.browserDescription[1]}
ぐ HOST : ${dehan.browserDescription[0]}
ぐ VERSI : ${dehan.browserDescription[2]}
ぐ V. Whatsapp: ${wa_version}
ぐ RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
ぐ MCC: ${mcc}
ぐ MNC: ${mnc}
ぐ Versi OS: ${os_version}
ぐ Merk HP: ${device_manufacturer}
ぐ Versi HP: ${device_model}
ぐ Total Chat: ${totalchat.length}
ぐ Speed: ${latesin.toFixed(4)} Second`
			   dehan.sendMessage(from, teskny, text, {quoted: dhn})
				break
                     case 'sendmessage':
                     if (!isOwner) return reply(ind.ownerb())
					var pc = args.join(" ")
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					dehan.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
				case 'statusgc':
				case 'statusgrup':
				case 'statusgroup':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
			  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
			   	if (!isGroup) return reply(ind.groupo())
		    inis = `ぐ Your Statues: ${isSenderGroupAdmins ? 'Admin Group' : 'Member Group'}
ぐ Bot Statues: ${isBotGroupAdmins ? 'Admin Group' : 'Member Group'}
ぐ Anti Link Group: ${isAntilink ? 'Sudah Aktif' : 'Belum Aktif'}
ぐ Anti Virtex: ${isAntivir ? 'Sudah Aktif' : 'Belum Aktif'}
ぐ Anti Porno Link: ${isAntiporn ? 'Sudah Aktif' : 'Belum Aktif'}
ぐ Welcome: ${isWelkom ? 'Sudah Aktif' : 'Belum Aktif'}
ぐ Left: ${isLepgc ? 'Sudah Aktif' : 'Belum Aktif'}
ぐ Simih: ${isSimi ? 'Sudah Aktif' : 'Belum Aktif'}
ぐ Leveling: ${isLevelingOn ? 'Sudah Aktif' : 'Belum Aktif'}
ぐ Nsfw: ${isNsfw ? 'Sudah Aktif' : 'Belum Aktif'}`
 dehan.sendMessage(from, inis, text, {quoted: dhn})
 break
				case 'tqto':
ini = `ぐ THANKS YOU TO
ぐ 1.Riz
ぐ 2.Aqul
ぐ 3.Nayla
ぐ 4.Lolgami
ぐ 5.Arga
ぐ 6.Galung
ぐ 7.Itsmeikysec404
ぐ ALL CREATOR
ぐ ALL MASTAH
ぐ ALL RECODER
ぐ ALL API REST
ぐ ALL MY FRIENDS
ぐ ALL USER ${name}`
                         dehan.sendMessage(from, ini, text)
                         break
				case 'ceklolhuman':
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
			  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
			   if (args.length == 0) return reply(mess.oke)
			   if (!isOwner) return reply(ind.ownerb())
		ApiKey = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${ApiKey}`)
                    get_result = get_result.result
                        txt = `User : ${get_result.username}\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    break
				case 'cekxteam':
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
			  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
			   if (args.length == 0) return reply(mess.oke)
			   if (!isOwner) return reply(ind.ownerb())
		ApiKey = args[0]
                    get_result = await fetchJson(`https://api.xteam.xyz/cekey?APIKEY=${ApiKey}`)
                    get_result = get_result.response
                        txt = `Ip: ${get_result.ip}\n`
                        txt += `Username: ${get_result.name}\n`
                        txt += `Req: ${get_result.totalhit}\n`
                        txt += `Type: ${get_result.premium}\n`
                        txt += `Apikey: ${get_result.apikey}\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    break
				 case 'addstatus':
					if (!isOwner) return reply(ind.ownerb())
					dehan.sendMessage('status@broadcast', `${args[0]}`, extendedText)
					reply('✓Sukses...')
			break 
				 case 'eval':
				if (!isOwner) return reply(ind.ownerb())
                if (!q) return reply(ind.wrongf())
                pe = JSON.parse(JSON.stringify(dhn).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                try {
         	           let evaled = await eval(pe)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	           dehan.sendMessage(from, evaled, extendedText)
          		//dehan.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
       	         } catch (err) {
        	            console.error(err)
          	          await reply('Error!')
  	   	       }
        	    break 
        		case 'listonline': 
        		if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(dehan.chats.get(ido).presences), dehan.user.jid]
			    dehan.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: dhn,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
				case '>':
				if (!isOwner) return reply(ind.ownerb())
				const cmd = args.join(" ")
				exec(cmd, (err, stdout) => {
					if (err) return dehan.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: dhn })
					if (stdout) {
						dehan.sendMessage(from, stdout, text)
					}
				})
				break
				 case 'readall':
					if (!isOwner) return reply(ind.ownerb())
					var chats = await dehan.chats.all()
                    chats.map( async ({ jid }) => {
                          await dehan.chatRead(jid)
                    })
					teks = `\`\`\`Berhasil membaca ${chats.length} Chat !\`\`\``
					await dehan.sendMessage(from, teks, MessageType.text, {quoted: dhn})
					console.log(chats.length)
					break
			case 'setstatus':
			if (!isOwner) return reply(ind.ownerb())
				dehan.setStatus(`${body.slice(11)}`)
   				.then(data => {
        			reply(JSON.stringify(data))
    				}).catch(err => console.log(err))
    				break
				case 'creategc':
				 if (!isOwner) return reply(ind.ownerb())
					var gc = args.join(" ")
				
					dehan.groupCreate (`${gc}`, [`${sender}`])
					console.log ("created group with id: " + from.gid)
					break
				case 'totaluser':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					  		  if (!isRegistered) return reply( ind.noregis(prefix, pushname))
					me = dehan.user
					buff = await getBuffer(me.imgUrl)
					teks = `ぐ Total User ${name} adalah
ぐ Total: ${_registered.length}`
dehan.sendMessage(from, buff, image, {quoted: dhn, caption: teks})
break
				case 'addowner': //427
				dehan.updatePresence(from, Presence.composing) 
				if (!isOwner) return reply(ind.ownerb())
				owmner = args[0]
				reply(`Berhasil menambah nomor tersebut kedalam owner number`)
				break

				default:
			if (body.startsWith(`${prefix}${command}`)) {

              dehan.sendMessage(from, `ぐ Name: ${pushname}\nぐ Number: @${sender.split('@')[0]}\nMaaf kak ${pushname}, Perintah ${prefix}${command} tersebut tidak terdapat didalam\n${prefix}menu ${name}\n\nぐ NOTE: Silahkan ketik ${prefix}menu untuk melihat list!`, text, {quoted: dhn})
                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						//reply(ind.cmdnf(prefix, pushname, command))
					} else {
						console.log(color('ぐ Dehan','blue'), color('jing','red'), color('デハンテ','white'), color(sender.split('@')[0]))
					}
					}
    } catch (e) {
            e = String(e)
            if (!e.includes("this.isZero")) {
                const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                console.log(color(time_error, "white"), color("[  ERROR  ]", "aqua"), color(e, 'red'))
            }
        }
        })}
        
starts()