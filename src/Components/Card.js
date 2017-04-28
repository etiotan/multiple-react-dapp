import React from 'react'


export const Card = ()=>{
    return(
        <div className="row">
            <div className="col s12 m4 right">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">About</span>
                  <p>A completely decentralized way to increase and decrease a number, all results sent directly to the test-net block chain. You can see your Ether and transaction change in real time by visiting the contract in the link below.</p>
                  <br></br>
                  <p><a className='blue-text' href='https://ropsten.etherscan.io/address/0xec2f06fcef81c913ee857a62cea6a592e58db241' target='_blank'>View Contract</a></p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/etiotan/react-dapp" target="_blank">Documentation</a>

                </div>
              </div>
            </div>
          </div>



  )
}
