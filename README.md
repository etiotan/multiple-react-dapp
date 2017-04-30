# Multi React DApps

[Ethereum]('https://github.com/ethereum/') is a very exciting piece of technology but there aren't many resources and examples demonstrating how to have your smart-contract interact with a user interface. If you are just confused on how to get web3 to work, reading the code should be enough.

## Prerequisites

1. Have [Geth]('https://ethereum.github.io/go-ethereum/downloads/') Installed
2. Create account & mine a few Ethers on the Ropsten Testnet.

## Installing & Using

Open up a few terminals and lets get started!

    Terminal 1
    1. git clone https://github.com/etiotan/multiple-react-dapp.git
    2. cd multiple-react-dapp
    3. npm install
    4. npm start

    Terminal 2
    geth --rpc --rpcaddr "0.0.0.0" --rpcport 8545 --testnet --rpcapi eth,net,web3,personal

    Terminal 3
    1. geth attach http://localhost:8545
    2. personal.unlockAccount(eth.coinbase, 'password', 0)


## How to use

Assuming you followed all the steps above, you should be able to navigate through the menus and interact with the DApps.

All transaction details are displayed on the console.

## Folders

    public              Holds index.html which is the render location
    solidity-contracts  Holds the solidity contracts
    src/Components      Holds reusuable components
    src/contracts       Holds the logic
    src/pages           Holds the pages/ui

## Pages

For those who do not want to install it all.

[Google Drive with images]('https://goo.gl/photos/UFjoKXzn7KTwiwem9')

![Send After](./pageImages/image4.png 'Send After')


# Decentralized Apps

##### Decentralized Counter

Adds/Subtracts, actions are recorded to the block-chain.

##### Sender

Lets you send Ether to another address.

### Built With

- [Geth]('https://github.com/ethereum/go-ethereum/wiki/geth')
- [Web3]('https://github.com/ethereum/wiki/wiki/JavaScript-API')
- [create-react-app]('https://github.com/facebookincubator/create-react-app')
- [react-router-dom]('https://www.npmjs.com/package/react-router-dom')
- [Material-Ui]('http://www.material-ui.com/')
- [Materialize-css]('http://materializecss.com/')

#### Future

Will continue adding DApps that are interesting and have higher levels of complexity

##### Contact

If you want to contribute just message.
