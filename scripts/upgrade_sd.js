const { ethers, upgrades } = require('hardhat');
const addresses = require("../deployed.json")


async function main() {
    const SD = await ethers.getContractFactory('SimpleDivision');
    console.log('Upgrading SimpleDivision...');
    await upgrades.upgradeProxy(addresses.SimpleDivision, SD);
    console.log('SimpleDivision upgraded');
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });