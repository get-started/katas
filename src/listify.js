var defaults = {sep: ', ', conj: ' and '};
var LAST_POSITION = -1;
function listify(list, options) {
    options = extend({}, options, defaults);
    var heading = list.length > 1 ? [list.slice(0, LAST_POSITION).join(options.sep)] : [];
    return heading.concat(list.slice(LAST_POSITION)).join(options.conj);
}