import React from 'react';
import {contractInstance, marketcap, ETObalance, contractAddress} from '../contracts/etioCoins.js'
import {web3, coinbase} from '../contracts/connect.js'
export class EtioCoins extends React.Component {

    constructor() {
        super()
        this.state = {
            transactionInfo: "",
            link: "",
            showLink:""
        }
    }

    handlePurchase(event){
        event.preventDefault();
        var amount = this.refs.amount.value.trim()
        if(amount){
        var buyETO = web3.eth.sendTransaction({from: coinbase, to: contractAddress, value: web3.toWei(amount, 'ether'), gasLimit:21000, gasPrice:2000000000})
        this.setState({transactionInfo:`You have spent ${amount} Ether which is ${amount*500} ETOs`, link:`https://ropsten.etherscan.io/tx/${buyETO}`, showLink:"Transaction Link"})
        this.refs.amount.value= ""
       console.log(web3.eth.getTransaction(buyETO))
   }
    }

    handleSend(event){
        event.preventDefault();
        var ETOcount = this.refs.ETOcount.value.trim()
        var address = this.refs.address.value.trim()
        if (ETOcount && address){
        var sendETO = contractInstance.transfer.sendTransaction(address, web3.toWei(ETOcount, "ether"), {from: coinbase})
        this.setState({transactionInfo:`You have sent ${ETOcount} ETOs to ${address}`, link:`https://ropsten.etherscan.io/tx/${sendETO}`, showLink:"Transaction Link"})
        this.refs.ETOcount.value= ""
        this.refs.address.value= ""
        console.log(web3.eth.getTransaction(sendETO))
    }
    }




    render() {
        return (
            <div className="container col s9 right flow-text">
                <h1>Etio Coins</h1>
                <h4><a href="https://ropsten.etherscan.io/token/0x07c19ba0e74e3b50986eb76ca337474888bcbb45" target="_blank">Total Supply</a> of ETO is <span className="teal-text accent-3">{marketcap}</span></h4>
                <h4>You hold <span className="teal-text accent-3">{ETObalance}</span> ETO</h4>
                <br></br>

                <h5 className="col s7"><i>you can purchase 500 ETOs for 1 ether</i></h5>
                <div className="input-field col s7">
                    <input ref="amount" type="text" className="validate"/>
                    <label>How many Ethers would you like to spend?</label>
                    <button onClick={this.handlePurchase.bind(this)} className="btn waves-effect waves-light" type="submit">Buy
                            <i className="material-icons right">shopping_cart</i>
                    </button>

                </div>

                <h5 className="col s7"><i>you can also send your precicous ETOs...</i></h5>

                <div className="input-field col s7">
                    <input ref="address" type="text" className="validate"/>
                    <label>Reciever Address</label>
                </div>
                <div className="input-field col s7">
                    <input ref="ETOcount" type="text" className="validate"/>
                    <label>How many would ETOs you like to send?</label>
                    <button onClick={this.handleSend.bind(this)} className="btn waves-effect waves-light" type="submit">Send
                            <i className="material-icons right">send</i>
                    </button>
                </div>



                <div className="col s8">
                    <p>{this.state.transactionInfo}</p>
                    <p><a href={this.state.link} target="_blank">{this.state.showLink}</a></p>
                </div>



            </div>
        )
    }
}
