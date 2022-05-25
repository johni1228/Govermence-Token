const hre = require("hardhat");
require("dotenv").config();

async function main() {

  const AGE = await hre.ethers.getContractFactory("AGE");
  const age = await AGE.deploy(process.env.TEAM_WALLET);

  await age.deployed();

  console.log("AGE deployed to:", age.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
