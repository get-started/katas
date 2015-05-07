describe('Factorial', function () {
    it("factorial(n)", function () {
        var data = [[1, 1], [2, 1 * 2], [3, 1 * 2 * 3], [4, 1 * 2 * 3 * 4]];
        data.forEach(function (point) {
            var n = point[0];
            var expected = point[1];
            expect(factorial(n)).toBe(expected);
        });
    });
});