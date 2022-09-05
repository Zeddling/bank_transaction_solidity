const { assert } = require("chai");

const BankTransaction = artifacts.require('BankTransaction');

contract('BankTransaction', function () {
    const cid = "0x71bE63f3384f5fb98995898A86B02Fb2426c5788";
    const rid = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
    const amount = 200;
    const note = "Hello World!";

    beforeEach(async function () {
        this.bt = await BankTransaction.new();
    });

    it('test create payment', async function () {
        await this.bt.create_payment(
            cid, rid, amount, note
        );

        let pids = await this.bt.getPIDS();

        assert.isNotEmpty(pids);
    });

    it('test find by pid', async function () {
        await this.bt.create_payment(
            cid, rid, amount, note
        );

        let pids = await this.bt.getPIDS();

        let trans = await this.bt.findByPID(pids[0]);

        assert.isNotEmpty(trans);
        assert.equal(trans[0], pids[0]);
    });

    it('test find by address', async function () {
        await this.bt.create_payment(
            cid, rid, amount, note
        );

        let pids = await this.bt.getPIDS();

        let trans = await this.bt.findByPID(pids[0]);

        assert.isNotEmpty(trans);
        assert.equal(trans[1], cid);
    });
});