import React from 'react';
import {Information} from '../contracts/connect.js';

export const About = () => {
    return (
        <div className="container col s9 right flow-text">

            <h1>About</h1>
            <Information/>

            <div>
                <h4>Basic Knowledge</h4>
                <li>Open your console and click the address to see transactions</li>
                <li>Menu to navigate</li>
                <li><a href='https://github.com/etiotan/multiple-react-dapp' target='_blank'>Documentation</a> for full set up and usage</li>

                <p>by:
                    <a className="cyan-text lighten-1" href="https://github.com/etiotan" target="_blank"> Etio Tan</a>
                </p>
            </div>

        </div>
    )
}
