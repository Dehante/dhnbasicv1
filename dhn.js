let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
const { color, bgcolor } = require('./lib/color')
const CFonts = require('cfonts')

CFonts.say('Dehan Basic V1', {
    font: 'chrome',
    align: 'center',
    gradient: ['red', 'blue']
})

CFonts.say('by Dehanjing', {
    font: 'chrome',
    align: 'center',
    gradient: ['red', 'blue']
})

function start(file) {
    let args = [path.join(file), ...process.argv.slice(2)]
    let p = spawn(process.argv[0], args, {
            stdio: ['inherit', 'inherit', 'inherit', 'ipc']
        })
        .on('message', data => {
            console.log('[RECEIVED]', data)
            switch (data) {
                case 'reset':
                    p.kill()
                    start.apply(this, arguments)
                    break
                case 'uptime':
                    p.send(process.uptime())
                    break
            }
        })
        .on('error', e => {
            console.error(e)
            fs.watchFile(args[0], () => {
                start()
                fs.unwatchFile(args[0])
            })
        })
}
console.log(color('Starting dehan.js...','red'))
start('dehan.js')