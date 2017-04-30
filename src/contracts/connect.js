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
              <li>Hello, <span className='teal-text accent-4'>{coinbase}</span></li>
              <li>your balance is <span className='teal-text accent-4'>{balance}</span></li>
            </ul>

        </div>


    )
}
