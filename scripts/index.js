const { ethers } = require("hardhat");
const address = require("../deployed.json")


async function main() {
    // const BankTransaction = await ethers.getContractFactory('BankTransaction');
    const SimpleDivide = await ethers.getContractFactory('SimpleDivision');
    // const bt = await BankTransaction.attach(bt_address);
    const sd = await SimpleDivide.attach(address.SimpleDivision);

    // const cid = "14dC79964da2C08b23698B3D3cc7Ca32193d9955";
    // const rid = "15d34AAf54267DB7D7c367839AAf71A00a2C6A65";
    // const amount = 200;
    // const note = "Hello World!";

    // await bt.create_payment(cid, rid, amount, note);

    // const pids = await bt.getPIDS();
    // console.log('Bank Transaction PIDs: \n', pids);

    await sd.divide(3, 2);
    console.log("Answer: ", await sd.getResult());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });