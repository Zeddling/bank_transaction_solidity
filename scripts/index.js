const { ethers } = require("hardhat");

async function main() {
    const BankTransaction = await ethers.getContractFactory('BankTransaction');
    const bt = await BankTransaction.attach("0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9");

    // const cid = "14dC79964da2C08b23698B3D3cc7Ca32193d9955";
    // const rid = "15d34AAf54267DB7D7c367839AAf71A00a2C6A65";
    // const amount = 200;
    // const note = "Hello World!";

    // await bt.create_payment(cid, rid, amount, note);

    const pids = await bt.getPIDS();
    console.log('Transaction: \n', await bt.findByPID(pids[0]));
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });