import React, {Component} from 'react';
import Web3 from 'web3'
import * as _ from './contracts/adder.js'
import Notifications, {notify} from 'react-notify-toast';

//connect to test-net
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

    componentWillMount() {
        console.log(web3, 'loaded')
    }

    render() {

        //invoke Adder function costs around .0005~ Ether
        function _adder() {
            console.log(`current count is ${display[1].toNumber() + 1}, it'll update give it time`)
            contractInstance.adder({from: coinbase})
            notify.show('Added! :)', "success", 3000);
        }

        //invoke Subtractor function costs around .0005~ Ether
        function _subtractor() {
            console.log(`current count is ${display[1].toNumber() - 1}`)
            contractInstance.subtractor({from: coinbase})
            notify.show('Subtracted! :(', "error", 3000);
        }

        return (
            <div className="container">
                <h3>Decentralized Counter</h3>
                <ul>
                    <li>Your Address: {coinbase}</li>
                    <li>Monies: {balance}
                        Ethers</li>
                    <blockquote className="count">
                        <li>Total Transactions: {transactionCount}</li>
                        <li>Current Count is at: {display[1].toNumber()}</li>
                    </blockquote>
                </ul>
                <button className="waves-effect waves-light btn" onClick={_adder}>ADD</button>
                <button className="waves-effect red btn" onClick={_subtractor}>SUB</button>

                <Notifications/>
            </div>
        );
    }
}

export default App;
