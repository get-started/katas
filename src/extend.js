function extend(source, parent) {
    for (var p in parent) {
        if (!source.hasOwnProperty(p)) {
            source[p] = parent[p];
        }
    }
    var others = Array.prototype.slice.call(arguments, 2);
    return others.length ? extend.apply(this, [source].concat(others)) : source;
}