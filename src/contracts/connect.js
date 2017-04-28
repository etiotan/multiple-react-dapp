import Web3 from 'web3'

//initalizes web3
export const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//returns current address
export const coinbase = web3.eth.coinbase
//returns balance in ether
export const balance = web3.fromWei(web3.eth.getBalance(coinbase), 'ether').toNumber()
