require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
    networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.SEPOLIA_ALCHEMY_RPC_U,
      accounts: [process.env.KEY]
    }
  },
  // etherscan: {
  //   apiKey: process.env.API_KEY,
  // },

};