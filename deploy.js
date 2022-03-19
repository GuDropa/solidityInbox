// deploy code will go here
const HDWaleltProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { abi, evm } = require('./compile');

const provider = new HDWaleltProvider(
  "income science now unknown split order extend torch suffer treat require sustain",
  "https://rinkeby.infura.io/v3/ef40c995b663485eb6b351e2b9729c58"
);

const web3 = new Web3(provider);

async function deploy() {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0])

  const result = await new web3.eth.Contract(abi)
                  .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
                  .send({ gas: '1000000', from : accounts[0] })

  console.log('Deployed from account', result.options.address)

  provider.engine.stop()
}

deploy();

