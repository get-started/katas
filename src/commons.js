Object.prototype.hasOwnProperty = Object.prototype.hasOwnProperty || function (name) {
        return this[name] !== undefined;
    };

function each(o, callback) {
    for (var p in o) {
        if (callback(p, o[p])===false) {
            break;
        }
    }
}