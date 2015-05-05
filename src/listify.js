var defaults = {sep: ', ', conj: ' and '};
function listify(list, options) {
    options = extend({}, options, defaults);
    var last = list.length - 1;
    var lhs = last > 0 ? [list.slice(0, last).join(options.sep)] : [];
    var rhs = list[last];
    return lhs.concat(rhs).join(options.conj || options.sep);
}