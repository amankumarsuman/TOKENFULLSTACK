const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("Token");
  // const FunTokenSale = await hre.ethers.getContractFactory("FunTokenSale");
  const token = await Token.deploy(1000000);

  // const tokenPrice = 1000000000000000;

  await token.deployed();

  console.log("Token :", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
