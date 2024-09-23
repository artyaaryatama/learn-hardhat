const hre = require("hardhat")

async function main() {
  const LearnFactory = await hre.ethers.getContractFactory("Learn");
  const lr = await LearnFactory.attach('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'); 
 
  const pemilik = await lr.getOwner()
  console.log('Ini owner contract: ',pemilik);

  const textRaw = await lr.textRaw()
  console.log(`textnya itu: ${textRaw}`);
  console.log('ini address smart contractnya', lr.target)
}

main().catch((error) =>{
  console.log(error)
  process.exitCode = 1
})