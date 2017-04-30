import Web3 from 'web3'
import React from 'react'
//initalizes web3
export const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//returns current address
export const coinbase = web3.eth.coinbase
//returns balance in ether
export const balance = web3.fromWei(web3.eth.getBalance(coinbase), 'ether').toNumber()


export const Information = ()=>{

    return(
        <div>
            <ul>
              <li>your address is <a className='blue-text' href={`https://ropsten.etherscan.io/address/${coinbase}`} target='_blank'>{coinbase}</a></li>
              <li>your balance is <span className='teal-text accent-4'>{balance}</span></li>
              <li>your transaction count is <span className='red-text accent-4'>{web3.eth.getTransactionCount(coinbase)}</span></li>
            </ul>

        </div>


    )
}
