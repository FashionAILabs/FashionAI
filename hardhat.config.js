// Loading env configs for deploying and public contract source
require('dotenv').config();

// Using hardhat-ethers plugin for deploying
// See here: https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html
//           https://hardhat.org/guides/deploying.html
require('@nomiclabs/hardhat-ethers');

// Testing plugins with Waffle
// See here: https://hardhat.org/guides/waffle-testing.html
require("@nomiclabs/hardhat-waffle");

// This plugin runs solhint on the project's sources and prints the report
// See here: https://hardhat.org/plugins/nomiclabs-hardhat-solhint.html
require("@nomiclabs/hardhat-solhint");

// Verify and public source code on etherscan
require('@nomiclabs/hardhat-etherscan');

const {
  DEPLOYER,
  VERIFY_KEY
} = require('./common/constant');

const config = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      account: 20,
    },
    localhost: {
      chainId: 31337,
    },
    bsctest: {
      url: "https://bsc-testnet.nodereal.io/v1/18224da5a61f445fb9ef01c78da70bed",
      chainId: 97,
      accounts: [DEPLOYER],
      gasPrice: 8000000000,
    },
    eth: {
      url: 'https://eth-mainnet.nodereal.io/v1/18224da5a61f445fb9ef01c78da70bed',
      chainId: 1,
      accounts: [DEPLOYER],
      gasPrice: 26000000000,
    }
  },
  etherscan: {
    apiKey: VERIFY_KEY
  },
  solidity: {
    compilers: [
      {
        version: '0.8.2',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ],
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
    deploy: 'deploy',
    deployments: 'deployments',
  },
  mocha: {
    timeout: 200000,
    useColors: true,
    reporter: 'mocha-multi-reporters',
    reporterOptions: {
      configFile: './mocha-report.json',
    },
  }
};

module.exports = config;
