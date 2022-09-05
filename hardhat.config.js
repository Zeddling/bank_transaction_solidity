/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades')

const { alchemiApiKey, privateKey } = require('./secrets.json');

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${alchemiApiKey}`,
      accounts: [privateKey]
    }
  }
};
