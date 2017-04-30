import {web3, coinbase } from './connect.js'

const contractAddress = '0xeC2f06fCef81c913EE857a62CEa6A592e58Db241'

const abi = [
{
"constant": true,
"inputs": [],
"name": "display",
"outputs": [
  {
    "name": "",
    "type": "address",
    "value": "0xcc1d40551070e1ef2dc9b6c3ba4181ee61c28684"
  }, {
    "name": "",
    "type": "uint256",
    "value": "1"
  }
],
"payable": false,
"type": "function"
}, {
"constant": false,
"inputs": [],
"name": "subtractor",
"outputs": [],
"payable": false,
"type": "function"
}, {
"constant": false,
"inputs": [],
"name": "adder",
"outputs": [],
"payable": false,
"type": "function"
}, {
"anonymous": false,
"inputs": [
  {
    "indexed": false,
    "name": "",
    "type": "string"
  }
],
"name": "Error",
"type": "event"
}
]

//logic


//addder contract
const MyContract = web3.eth.contract(abi);
// instantiate by address
const contractInstance = MyContract.at(contractAddress);

//display doesnt count as a transaction as long as you call it
const display = contractInstance.display.call()[1].toNumber()



//invoke Adder function costs around .0005~ Ether
const adder = ()=> {

    var added = contractInstance.adder({from: coinbase})
    console.log(web3.eth.getTransaction(added))
    console.log(`${web3.eth.getTransaction(added).nonce} is the current nonce, you can view the JS object for more`)
    alert('Open your console!')
}

//invoke Subtractor function costs around .0005~ Ether
const subtractor = ()=> {

    var subtractor = contractInstance.subtractor({from: coinbase})
    console.log(web3.eth.getTransaction(subtractor))
    console.log(`${web3.eth.getTransaction(subtractor).nonce} is the current nonce, you can view the Object for more`)
    alert('Open your console!')
}

export {contractAddress, abi, MyContract, contractInstance, display, adder, subtractor}
