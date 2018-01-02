var os = require('os');
var time = require('./timeFormat');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log(colors.red('System:'), type);
    console.log(colors.bgBlue('Release:'), colors.bgYellow.black(release));
    console.log('CPU model:', cpu);
    console.log('Uptime: ', (uptime), 'sec');
    console.log(colors.random('Uptime: ~'), time.sec2hour(uptime));
    console.log(colors.zebra('User name:'), userInfo.username);
    console.log('Home dir:'.rainbow, userInfo.homedir.rainbow);
}

exports.print = getOSinfo;