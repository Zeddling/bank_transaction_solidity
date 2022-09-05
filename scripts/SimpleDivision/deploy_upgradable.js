const { ethers, upgrades } = require("hardhat");

async function main() {
    const SP = await ethers.getContractFactory('SimpleDivision');
    console.log('Deploying SimpleDivision...');
    const sp = await upgrades.deployProxy(SP, []);
    await sp.deployed();

    console.log('SimpleDivision deployed to: ', sp.address);

}

main();