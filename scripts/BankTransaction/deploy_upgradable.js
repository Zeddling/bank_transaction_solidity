const { ethers, upgrades } = require("hardhat");

async function main() {
    const BT = await ethers.getContractFactory('BankTransaction');
    console.log('Deploying BankTransaction...');
    const bt = await upgrades.deployProxy(BT, []);
    await bt.deployed();

    console.log('BankTransaction deployed to: ', bt.address);
}

main();