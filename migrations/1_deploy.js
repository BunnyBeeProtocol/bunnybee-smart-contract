async function main() {
    const bunnyBee = await ethers.getContractFactory("BunnyBee");
    const bunnyBeeContract = await bunnyBee.deploy();

    await bunnyBeeContract.deployed();
    console.log("Bunny Bee contract deployed to:", bunnyBeeContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
