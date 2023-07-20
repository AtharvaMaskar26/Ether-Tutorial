main = async() => {
    const [deployer] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("wallet");

    const contract = await Contract.deploy();

    console.log(`Contract address: ${contract.address}`);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})