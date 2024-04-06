const { ethers } = require("hardhat"); // importing ethers library to file
const hre = require("hardhat");  // importing hardhat to file

async function main() {

    const coffee = await hre.ethers.getContractFactory("coffee");
    const Coffee = await coffee.deploy();
    await Coffee.waitForDeployment();

    console.log(`coffee contract deployed to: ${Coffee.address}`);

    const buy = await Coffee.functions.buyCoffee({
        value: ethers.utils.parseEther("1.0"),
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
    .then(() => process.exit(0))
    .catch((error) =>    {
        console.error(error);
        process.exit("1");  
    });