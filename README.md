connect to test-net

1. geth --rpc --rpcaddr "0.0.0.0" --rpcport 8545 --testnet --rpcapi eth,net,web3,personal

2. geth attach http://localhost:8545

3. personal.unlockAccount(eth.coinbase, 'password', 0) zero means it will keep account unlocked
