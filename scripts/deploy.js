const hre = require("hardhat")

async function main() {
  const LearnFactory = await hre.ethers.getContractFactory("Learn");
  const lr = await LearnFactory.deploy(); // Deploy the contract

  // await lr.deployed();  
  // await lr.deployTransaction.wait();
  // Wait for the contract to be mined

  console.log("Contract instance: ", lr);  // Log the deployed contract instance
  // await lr.deployed() somehow it doesn't working
  console.log("LearnFactory deployed to: ", lr.target);  // Log the contract's address

  // Example: interact with the contract
  const ownerAddress = await lr.getOwner();
  console.log("Owner Address: ", ownerAddress);
}

main().catch((error) =>{
  console.log(error)
  process.exitCode = 1
})