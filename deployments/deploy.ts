import { ethers } from "hardhat";

async function main() {
    const Package = await ethers.getContractFactory("Package");
    const packageDeploy = await Package.deploy();
    await packageDeploy.waitForDeployment();
    console.log("Package deployed to:", await packageDeploy.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });