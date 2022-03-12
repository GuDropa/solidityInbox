// deploy code will go here
const HDWaleltProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWaleltProvider(
  // mnemonic,
  // infura api link 
);

const web3 = new Web3(provider);

