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

    it("using custom separator", function () {
        expect(listify([1, 2, 3, 4], {sep: ';'})).toBe('1;2;3 and 4');
    });

    it("using custom conjunction", function () {
        expect(listify([1, 2, 3, 4], {conj: ' or '})).toBe('1, 2, 3 or 4');
    });

    it("throws error when no list given", function () {
        expect(function () {
            listify();
        }).toThrowError(TypeError);
    });
});