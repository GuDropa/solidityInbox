// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());
const { abi, evm } = require ('../compile.js')

let accounts;
let inbox;
const INITIAL_MESSAGE = 'Hi there!'
const NEW_MESSAGE = 'Bye there!'

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [INITIAL_MESSAGE]})
    .send({ from: accounts[0], gas: '1000000' });
  // Use one of those accounts to deploy the contract 

});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address)
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call()
    assert.equal(message, INITIAL_MESSAGE)
  })

  it('can change the message', async () => {
    await inbox.methods.setMessage(NEW_MESSAGE).send({ from: accounts[0] })

    const message = await inbox.methods.message().call()
    assert.equal(message, NEW_MESSAGE)
    
    // inbox.methods.setMessage(NEW_MESSAGE).call().then(async () => {
    //   const newMessage = await inbox.methods.message().call()
    //   assert.equal(newMessage, NEW_MESSAGE)
    // })

  })
});

// class Car{
//   park() {
//     return 'stopped';
//   }
//   drive() {
//     return 'vroom';
//   }
// }

// let car;

// beforeEach(() => {
//   car = new Car();
// })

// describe('Car', () => {
//   it('can park', () => {
//     assert.equal(car.park(), 'stopped');
//   })

//   it('can drive', () => {
//     assert.equal(car.drive(), 'vroom');
//   })
// })
