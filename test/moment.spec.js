describe('Moment', function () {
    moment.locale('zh_cn');
    describe("from date", function () {
        it("just now", function () {
            expect(moment(new Date()).fromNow()).toEqual('几秒前');
        });
    });

    describe("from string", function () {
        it("just now", function () {
            expect(moment(new Date().toString()).fromNow()).toEqual('几秒前');
        });
    });

    describe("from timestamp", function () {
        it("just now", function () {
            expect(moment(+new Date).fromNow()).toEqual('几秒前');
        });
    });

    describe("moments", function () {
        it("days", function () {
            expect(moment().from(moment().add(1, 'days'))).toEqual('1天前');
            expect(moment().from(moment().subtract(2, 'days'))).toEqual('2天内');
        });
    });

});