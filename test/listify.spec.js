describe('listify', function () {

    it("empty list", function () {
        expect(listify([])).toBe('');
    });

    it("1 item", function () {
        expect(listify([1])).toBe('1');
    });

    it("2 items", function () {
        expect(listify([1, 2])).toBe('1 and 2');
    });

    it("more than 2 items", function () {
        expect(listify([1, 2, 3])).toBe('1, 2 and 3');
        expect(listify([1, 2, 3, 4])).toBe('1, 2, 3 and 4');
    });

    it("2 items with no conj", function () {
        expect(listify([1, 2], {conj: false})).toBe('1, 2');
    });

    it("using custom separator", function () {
        expect(listify([1, 2, 3, 4], {sep: ';'})).toBe('1;2;3 and 4');
    });

    it("using custom conjunction", function () {
        expect(listify([1, 2, 3, 4], {conj: ' or '})).toBe('1, 2, 3 or 4');
    });

    it("using sep,conj objects", function () {
        var htmlOptions = {
            sep: string('&nbsp;'),
            conj: string('&nbsp;or&nbsp;')
        };
        expect(listify([1, 2, 3, 4], htmlOptions)).toBe('1&nbsp;2&nbsp;3&nbsp;or&nbsp;4');
    });

    it("throws error when no list given", function () {
        expect(function () {
            listify();
        }).toThrowError(TypeError);
    });

    function string(value) {
        return {
            toString: function () {
                return value;
            }
        };
    }
});