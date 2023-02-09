const ether = require('@openzeppelin/test-helpers/src/ether');
const fs = require('fs');
const hre = require('hardhat');
const ethers = hre.ethers;

async function main() {
    // Loading accounts
    const [deployer] = await ethers.getSigners();

    console.log('=====================================================================================');
    console.log('DEPLOYER:', deployer.address);


    // Loading contract factory
    const TokenFAI = await ethers.getContractFactory('FashionAIToken');

    console.log('=====================================================================================');
    console.log(`DEPLOYED CONTRACT ADDRESS TO:  ${hre.network.name}`);
    console.log('=====================================================================================');

    const tokenFAI = await TokenFAI.deploy();
    await tokenFAI.deployed();
    console.log(' TokenFAI         deployed to:', tokenFAI.address);

    // export deployed contracts to json (using for front-end)
    const contractAddresses = {
        "TokenFAI": tokenFAI.address,
    }
    await fs.writeFileSync("contracts.json", JSON.stringify(contractAddresses));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
