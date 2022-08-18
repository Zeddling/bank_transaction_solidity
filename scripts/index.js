const { ethers } = require("hardhat");

async function main() {
    const BankTransaction = await ethers.getContractFactory('BankTransaction');
    const bt = await BankTransaction.attach("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");

    const cid = "14dC79964da2C08b23698B3D3cc7Ca32193d9955";
    const rid = "15d34AAf54267DB7D7c367839AAf71A00a2C6A65";
    const amount = 200;
    const note = "Hello World!";

    await bt.create_payment(cid, rid, amount, note);

    const val = await bt.findByPID("0x5a06241734b194f89efbdde276c73309fa2e1407d38362c97f8936e81bc62667")
    console.log('Transaction: \n', val);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });