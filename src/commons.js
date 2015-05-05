Object.prototype.hasOwnProperty = Object.prototype.hasOwnProperty || function (name) {
        return this[name] !== undefined;
    };
