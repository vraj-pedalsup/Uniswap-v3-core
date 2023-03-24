const hre = require('hardhat')
const ethers = hre.ethers

// require('dotenv').config()
// const { abi: FACTORY_ABI, bytecode: FACTORY_BYTECODE } = require('../artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json')

// Connect to the Ganache test network
// const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL)
// const privateKey = process.env.PRIVATE_KEY
// const wallet = new ethers.Wallet(privateKey, provider)

// const deployUniswap = async () => {
// const factory = await hre.ethers.getContractFactory(
//     undefined, // existing factory contract
//     FACTORY_ABI,
//     wallet
//   )
  
//   const deployTx = await factory.deploy({
//     bytecode: FACTORY_BYTECODE,
//     args: [wallet.address]
//   })
//   await deployTx.deployed()

//   console.log("Factory contract deployed at address: ", deployTx.address)
// }

async function main(){
    const UniswapV3Factory = await ethers.getContractFactory("UniswapV3Factory");
    const factory = await UniswapV3Factory.deploy();
    await factory.deployed();
    console.log("UniswapV3Factory deployed to:", factory.address);

    const UniswapV3PoolDeployer = await ethers.getContractFactory("UniswapV3PoolDeployer");
    const uniswapv3pooldeployer = await UniswapV3PoolDeployer.deploy({ gasLimit: 5000000 });
    await uniswapv3pooldeployer.deployed();
    console.log("UniswapV3PoolDeployer deployed to:", uniswapv3pooldeployer.address);

    // console.log(`Verifying contract on Etherscan...`);

    // await run(`verify:verify`, {
    //     address: factory.address,
    //     constructorArguments: [],
    // });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });