const { ethers } = require("hardhat");

async function main() {
    const BT = await ethers.getContractFactory('BankTransaction');
    console.log('Deploying BankTransaction...');
    const bt = await BT.deploy();
    await bt.deployed();

    console.log('BankTransaction deployed to: ', bt.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });