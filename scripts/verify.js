const hre = require('hardhat');
const contract = require('../contracts.json');
const {
  VERIFY_KEY, DEPLOYER
} = require('../common/constant');

/// Discription : Verification source script
/// Prerequisite: Adding VERIFY_KEY value in `.env` file
/// How to use  : Run below command
///               cmd$> npx hardhat run script/verify.js --network <your-network>
async function main() {

  console.log('=====================================================================================');
  console.log('VERIFY_KEY:', VERIFY_KEY);
  console.log('=====================================================================================');

  console.log('Verify TokenFAI');
  try {
    await hre.run("verify:verify", {
      address: contract.TokenFAI,
      constructorArguments: [],
      contract: "contracts/FashionAI.sol:FashionAIToken"
    });
  } catch (e) {
    console.log(e.message);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
