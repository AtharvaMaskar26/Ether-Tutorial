const {ethers} = require("ethers");

// Adding a provider (By setting up a node)
const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/9ccad306349345c18e48c2d41c1b5f1d"
);

const readBlockchain = async() => {
    // Get current Block Number
    const block = await provider.getBlockNumber();
    console.log(`Current Block Number is: ${block}`);
}

const getBalance = async() => {
    const accountBalanceInWei = await provider.getBalance("0xd8da6bf26964af9d7eed9e03e53415d37aa96045");
    console.log(`Account Balanace is: ${accountBalanceInWei}`);

    const accountBalanceInEther = ethers.utils.formatEther(accountBalanceInWei);
    console.log(`Account Balance in Ether is: ${accountBalanceInEther}`);
}

getBalance();
readBlockchain();