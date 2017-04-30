import React from 'react';
import {Information} from '../contracts/connect.js';

export const About = () => {
    return (
        <div className="container col s9 right flow-text">

            <h1>About</h1>
            <Information/>

            <div>
                <p>Connecting your smart contract to a UI</p>
                <p>The block-chain is the
                    <a href="https://ropsten.etherscan.io/" target="_blank"> Ropsten Test Net</a></p>

                <ul>
                    <li>
                        <a href='https://github.com/etiotan/multiple-react-dapp' target='_blank'>Read Documentation</a>
                    </li>

                </ul>
                <p>by:
                    <a className="cyan-text lighten-1" href="https://github.com/etiotan" target="_blank"> Etio Tan</a>
                </p>
            </div>

        </div>
    )
}
