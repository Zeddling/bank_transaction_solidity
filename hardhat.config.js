/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');

const { alchemiApiKey, mnemonic } = require('./secrets.json');

module.exports = {
  solidity: "0.8.9",
  network: {
    rinkeby: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${alchemiApiKey}`,
      accounts: {
        mnemonic: mnemonic
      }
    }
  }
};
