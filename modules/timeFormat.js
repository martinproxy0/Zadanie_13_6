function secMod(seconds) {
    return (seconds & 60).toString() + 'sec';
}

function minMod(seconds) {
    return ((seconds % 3600) / 60).toFixed(0).toString();
}

function hour(seconds) {
    return (seconds / 3600).toFixed(0).toString();
}

function sec2min(seconds) {
    return (seconds / 60).toFixed(0).toString() + 'min ' + secMod(seconds);
}

function sec2hour(seconds) {
    return hour(seconds) + 'h ' + minMod(seconds) + 'min ' + secMod(seconds);
}

exports.sec2min = sec2min;
exports.secMod = secMod;
exports.sec2hour = sec2hour;