describe('braces validator', function () {
    it("no braces", function () {
        expect(braces.valid("")).toBeTruthy();
        expect(braces.valid("abc")).toBeTruthy();
    });

    it("no right brace", function () {
        expect(braces.valid('(')).not.toBeTruthy();
    });

    it("no left brace", function () {
        expect(braces.valid(')')).not.toBeTruthy();
    });

    it("simple", function () {
        expect(braces.valid('()')).toBeTruthy();
        expect(braces.valid('(abc)')).toBeTruthy();
    });

    it("invalid ordering", function () {
        expect(braces.valid(')(')).not.toBeTruthy();
    });

    it("continuous", function () {
        expect(braces.valid('()()()')).toBeTruthy();
        expect(braces.valid('a(b)c(d)e(f)g')).toBeTruthy();
    });

    it("nested", function () {
        expect(braces.valid('(()(()))')).toBeTruthy();
        expect(braces.valid('a(b(c)d(e(f)g)h)i')).toBeTruthy();
    });

    it("mixin", function () {
        expect(braces.valid('(()(()))()')).toBeTruthy();
    });
});