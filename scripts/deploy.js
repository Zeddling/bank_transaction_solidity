const { ethers } = require("hardhat");

async function main() {
    const BT = await ethers.getContractFactory('BankTransaction');
    console.log('Deploying BankTransaction...');
    const bt = await BT.deploy();
    await bt.deployed();

    console.log('BankTransaction deployed to: ', bt.address);

    const SP = await ethers.getContractFactory('SimpleDivision');
    console.log('Deploying SimpleDivision...');
    const sp = await SP.deploy();
    await sp.deployed();


    console.log('SimpleDivision deployed to: ', sp.address);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });