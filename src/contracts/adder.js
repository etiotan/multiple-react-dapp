import { web3, coinbase } from './connect.js'
import {notify} from 'react-notify-toast';

export const contractAddress = '0xeC2f06fCef81c913EE857a62CEa6A592e58Db241'

export const abi = [
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
export const MyContract = web3.eth.contract(abi);
// instantiate by address
export const contractInstance = MyContract.at(contractAddress);
//# of transactions made by account
export const transactionCount = web3.eth.getTransactionCount(coinbase)
//display doesnt count as a transaction as long as you call it
export const display = contractInstance.display.call()



//invoke Adder function costs around .0005~ Ether
export const adder = ()=> {
    console.log(`current count is ${display[1].toNumber() + 1}, it'll update give it time`)
    contractInstance.adder({from: coinbase})
    notify.show('Added! :)', "success", 3000);
}

//invoke Subtractor function costs around .0005~ Ether
export const subtractor = ()=> {
    console.log(`current count is ${display[1].toNumber() - 1}`)
    contractInstance.subtractor({from: coinbase})
    notify.show('Subtracted! :(', "error", 3000);
}
