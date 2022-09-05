const { assert } = require("chai");

const SimpleDivision = artifacts.require('SimpleDivision');

contract('SimpleDivision', function () {
    beforeEach(async function () {
        this.sp = await SimpleDivision.new();
    });

    it('test division 3 / 2 returns 15', async function () {
        await this.sp.divide(3, 2);

        const res = await this.sp.getResult();
        assert.equal(res, 15);
    });

    it('test division recurring number returns 5 digit number', async function () {
        await this.sp.divide(2, 3);
        const res = await this.sp.getResult();
        assert.equal(res, 666);
    });
})
