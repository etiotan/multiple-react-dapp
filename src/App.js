import React, { Component } from 'react';


import Web3 from 'web3'
import  * as _  from './contracts/adder.js'



var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//returns current address
var coinbase = web3.eth.coinbase

//returns balance in ether
var balance = web3.fromWei(web3.eth.getBalance(coinbase), 'ether').toNumber()

//addder contract
var MyContract = web3.eth.contract(_.abi);
// instantiate by address
var contractInstance = MyContract.at(_.contractAddress);

        //# of transactions made by account
var transactionCount = web3.eth.getTransactionCount(coinbase)

//display doesnt count as a transaction as long as you call it
var display = contractInstance.display.call()




// var adder = contractInstance.adder()
class App extends Component {


    componentWillMount(){
        console.log(web3, 'loaded')


    }


  render() {
      function _adder(){

           console.log(`current count is ${display[1].toNumber()+1}, it'll update give it time`)
          contractInstance.adder({from:coinbase})
      }
      function _subtractor(){
          console.log(`current count is ${display[1].toNumber()-1}`)
          contractInstance.subtractor({from:coinbase})

      }


    return (
      <div className="App">
          <h1>Your Address: {coinbase}</h1>
          <h2>Monies: {balance} Ethers</h2>
          <h2>Total Transactions: {transactionCount}</h2>
          <h1>Current Count is at: {display[1].toNumber()}</h1>
          <h1><a href='https://ropsten.etherscan.io/address/0xec2f06fcef81c913ee857a62cea6a592e58db241'>View Contract</a></h1>
          <button onClick={_adder}>Adder</button>

          <button onClick={_subtractor}>Subtractor</button>


      </div>
    );
  }
}

export default App;
