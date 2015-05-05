(function (factory) {
    window.listify = factory();
})(function () {
    var defaults = {sep: ', ', conj: ' and '};
    var LAST_POSITION = -1;
    return function (list, options) {
        var sep = options && options.sep || defaults.sep;
        var conj = options && options.conj || defaults.conj;
        var heading = list.length > 1 ? [list.slice(0, LAST_POSITION).join(sep)] : [];
        return heading.concat(list.slice(LAST_POSITION)).join(conj);
    };
});