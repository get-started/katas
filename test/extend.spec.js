describe('extend', function () {
    var foo, pair;
    beforeEach(function () {
        foo = {foo: 'bar'};
        pair = {key: 'value'};
    });

    it("no targets", function () {
        expect(extend(foo)).toBe(foo);
    });

    it("extend parent properties", function () {
        expect(extend(foo, pair)).toEqual({foo: 'bar', key: 'value'});
    });

    it("override parent properties if property exists", function () {
        expect(extend({foo: 'other'}, foo)).toEqual({foo: 'other'});
        expect(extend({foo: null}, foo)).toEqual({foo: null});
        expect(extend({foo: undefined}, foo)).toEqual({foo: undefined});
    });

    it("extend multi parents in sequence", function () {
        expect(extend({}, foo, {key: 'value', foo: 'other'})).toEqual({
            foo: 'bar',
            key: 'value'
        });
    });

    it("skip extends null parents and continue others", function () {
        expect(extend({}, null, null, foo)).toEqual(foo);
    });
});