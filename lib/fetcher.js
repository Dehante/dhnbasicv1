const fetch = require('node-fetch')
const fs = require('fs')
const util = require('util')
const path = require('path')
const FileType = require('file-type')
const { spawn } = require('child_process')
const { MessageType } = require('@adiwajshing/baileys')


exports.DehanBase = getBase64 = async (url) => {
    const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64;
};

exports.DehanBuffer = getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

exports.DehanJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


exports.DehanText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.DehanUpImg = uploadImages = (buffData, type) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = fromBuffer(buffData)
        const filePath = 'utils/temp.' + ext
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to Telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
            .then(res => res.json())
            .then(res => {
                if (res.error) return reject(res.error)
                resolve('https://telegra.ph' + res[0].src)
            })
            .then(() => fs.unlinkSync(filePath))
            .catch(err => reject(err))
        })
    })
}
