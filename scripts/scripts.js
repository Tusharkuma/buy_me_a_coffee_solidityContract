const { ethers } = require("ethers"); // importing ethers library to file
const hre = require("hardhat");  // importing hardhat to file

async function main() {

    const coffee = await hre.ethers.deployContract("coffee");
    const Coffee = await coffee.deploy("Hello, Hardhat!");

    await Coffee.deployed();

    console.log("coffee contract deployed to: ", Coffee.address);

    const buy = await Coffee.functions.buyCoffee({
        value: ethers.utils.parseEther("1.0")
    });

    console.log(buy); //
    await buy.wait(); //wait to complete buy
    console.log(await Coffee.provider.getBalance(Coffee.address)); //show the balance in Coffee contract

    const withdraw = await Coffee.functions.withdraw();
    console.log(withdraw);
    await withdraw.wait();
    console.log( await Coffee.providers.getBalance(Coffee.address)); //show the balance in Coffee contract
    

}

main()