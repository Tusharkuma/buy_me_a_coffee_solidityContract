
const hre = require("hardhat");

async function main() {

    const coffee = await hre.ethers.deployContract("coffee");
    const Coffee = await coffee.deploy("Hello, Hardhat!");

    await Coffee.deployed();

    console.log("coffee contract deployed to: ", Coffee.address);
}