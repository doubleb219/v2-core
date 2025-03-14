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
    sonicTestnet: {
      url: "https://rpc.blaze.soniclabs.com", // Replace with actual RPC URL if different
      chainId: 57054, // Replace with correct chain ID if different
      accounts: [process.env.PRIVATE_KEY], // Load private key from .env file
    },
  },
  etherscan: {
    apiKey: {
      sonicTestnet:"9DXFXX257MVXK9HGBF4S1WKHZMR8CRSXGM"
    },
    customChains: [
      {
        network: "sonicTestnet",
        chainId: 57054,
        urls: {
          apiURL: "https://api-testnet.sonicscan.org/api",
          browserURL: "https://testnet.sonicscan.org"
        }
      }
    ]
  }
};