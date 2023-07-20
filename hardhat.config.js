require("@nomiclabs/hardhat-waffle")

const ALCHEMY_API_KEY = "9ccad306349345c18e48c2d41c1b5f1d";
const PRIVATE_KEY = "ee6b0ecbc9bf2bed093081ce29815fe91138ba7a995e1f6a9fee05ea86cfdab9";
module.exports = {
  solidity: "0.8.19",

  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${ALCHEMY_API_KEY}`, 
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};