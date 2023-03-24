import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
require('dotenv').config()
import 'hardhat-contract-sizer'

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    goerli: {
      url: process.env.GOERLI_URL,
    },
    ganache:{
      url: process.env.GANACHE_RPC_URL,
      accounts: [process.env.GANACHE_PRIVATE_KEY]
    },
    // kovan: {
    //   url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // arbitrumRinkeby: {
    //   url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // arbitrum: {
    //   url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // optimismKovan: {
    //   url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // optimism: {
    //   url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // mumbai: {
    //   url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // polygon: {
    //   url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // bnb: {
    //   url: `https://bsc-dataseed.binance.org/`,
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  contractSizer: {
      alphaSort: true,
      disambiguatePaths: false,
      runOnCompile: false,
      strict: true,
    },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
