describe('each', function () {
    var result;

    function collector(name, value) {
        result[name] = value;
    }

    beforeEach(function () {
        result = {};
    });

    describe("#each(object)", function () {

        it("empty", function () {
            each({}, collector);
            expect(result).toEqual({});
        });

        it("properties", function () {
            each({key: 'value', foo: 'bar'}, collector);
            expect(result).toEqual({key: 'value', foo: 'bar'});
        });

        it("include null properties", function () {
            each({key: null, value: undefined}, collector);
            expect(result).toEqual({key: null, value: undefined});
        });

    });

    describe("#each(array)", function () {

        it("empty", function () {
            each([], collector);
            expect(result).toEqual({});
        });

        it("with items", function () {
            each(['value', 'bar'], collector);
            expect(result).toEqual({0: 'value', 1: 'bar'});
        });

        it("include null items", function () {
            each([null, undefined], collector);
            expect(result).toEqual({0: null, 1: undefined});
        });

    });

    describe("abort", function () {
        it("by callback return false", function () {
            each([1, 2, 3], function (index, value) {
                result[index] = value;
                return index < 1;
            });

            expect(result).toEqual({0: 1, 1: 2});
        });
    });
});