const hre = require("hardhat")

async function main() {
  const LearnFactory = await hre.ethers.getContractFactory("Learn");
  const lr = await LearnFactory.attach('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'); 
 
  const textRaw = await lr.setText("Nilo kucingg oren");
  console.log(`succesfully set the textRaw`);
}

main().catch((error) =>{
  console.log(error)
  process.exitCode = 1
})