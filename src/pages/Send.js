import React from 'react';
import {Information} from '../contracts/connect.js';
import {web3, coinbase } from '../contracts/connect.js'

export class Send extends React.Component {

constructor(){
    super()
    this.state= {
        transactionInfo:"",
        link: "",
        showLink:""
    }
}

handleSend(event){
    event.preventDefault();
    var address = (this.refs.address.value.trim())
    var amount = (this.refs.amount.value.trim())

    var sentEther = web3.eth.sendTransaction({from: coinbase, to: address, value: web3.toWei(amount, 'ether'), gasLimit:21000, gasPrice:2000000000})
    this.setState({transactionInfo:`You have sent ${amount} to ${address}`, link:`https://ropsten.etherscan.io/tx/${sentEther}`, showLink:"Transaction Link"})
    this.refs.address.value= ""
    this.refs.amount.value= ""
   console.log(web3.eth.getTransaction(sentEther))

}

    render(){
    return (
        <div className="container col s9 right flow-text">

            <h1>Send</h1>
            <Information/>

            <div className="input-field col s7">
                <input ref="address" type="text" className="validate"/>
                <label>Send To:</label>
            </div>

            <div className="input-field col s7">
                <input ref="amount" type="text" className="validate"/>
                <label>Amount</label>
            </div>
            <div className="col s7">
                <button onClick={this.handleSend.bind(this)} className="btn waves-effect waves-light" type="submit">Send
                    <i className="material-icons right">send</i>
                </button>
            </div>
            <div className='col s7'>
            <p className="red-text">Costs {web3.fromWei("42000000000000", 'ether')} Ether to send</p>
            <p>{this.state.transactionInfo}</p>
            <a href={this.state.link} target='_blank'>{this.state.showLink}</a>
        </div>
        </div>
    )
}
}
