Object.prototype.hasOwnProperty = Object.prototype.hasOwnProperty || function (a) {
        return void 0 !== this[a]
    };
function extend(a, b) {
    for (var c in b)a.hasOwnProperty(c) || (a[c] = b[c]);
    var d = Array.prototype.slice.call(arguments, 2);
    return d.length ? extend.apply(this, [a].concat(d)) : a
}
var defaults = {sep: ", ", conj: " and "}, LAST_POSITION = -1;
function listify(a, b) {
    b = extend({}, b, defaults);
    var c = a.length > 1 ? [a.slice(0, LAST_POSITION).join(b.sep)] : [];
    return c.concat(a.slice(LAST_POSITION)).join(b.conj)
}