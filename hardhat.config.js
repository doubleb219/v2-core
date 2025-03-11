/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.5.16",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    sonic: {
      url: "https://rpc.blaze.soniclabs.com", // Replace with actual RPC URL if different
      chainId: 57054, // Replace with correct chain ID if different
      accounts: [process.env.PRIVATE_KEY], // Load private key from .env file
    },
  },
};