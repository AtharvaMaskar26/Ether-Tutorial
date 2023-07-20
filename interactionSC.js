
// Contract Address - 0xe3f1189bFe54a0d184Ab726E88688eC2678a7286
const { config } = require("chai");
const {ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/9ccad306349345c18e48c2d41c1b5f1d");

const contractAddress = "0xe3f1189bFe54a0d184Ab726E88688eC2678a7286";
const contractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "accountBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sendEthContract",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "sendEthUser",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_num",
          "type": "uint256"
        }
      ],
      "name": "setValue",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];

const contractInteraction = async() => {
    // Connects to the contract - Now you can access contract functions and variables
    const walletContracts = new ethers.Contract(contractAddress, contractABI, provider);

    const contractName = await walletContracts.name();
    console.log(`Contract Name: ${contractName}`);

    const num = await walletContracts.getValue();
    console.log(`Contract Value: ${num}`);

    const contractBalanceInWei = await walletContracts.contractBalance();
    console.log(`Contract Balance in Wei: ${contractBalanceInWei}`);

    const contractBalanceInEther = await ethers.utils.formatEther(contractBalanceInWei);
    console.log(`Contract Balance in Ether: ${contractBalanceInEther}`);

    const accountBalanceInWei = await walletContracts.accountBalance("0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8");
    console.log(`Account Balance in Wei: ${accountBalanceInWei}`);

    const accountBalanceInEther = await ethers.utils.formatEther(accountBalanceInWei);
    console.log(`Accoutn Balance in Ether: ${accountBalanceInEther}`);
}

contractInteraction();