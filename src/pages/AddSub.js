import React from 'react';
import {Information} from '../contracts/connect.js'
import * as addLogic from '../contracts/adder.js'
import AddModal from '../Components/AddModal'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// eventually will move address and balance to the mainlayout

// stateless
export const AddSub = () => {

    return (
        <div className="col s9 right flow-text">

            <h1>Decentralized Counter</h1>

            <MuiThemeProvider>
                <AddModal/>
            </MuiThemeProvider>

            <ul>
                <Information/>

                <p>Open your console & see the
                    <a className='blue-text' href='https://ropsten.etherscan.io/address/0xec2f06fcef81c913ee857a62cea6a592e58db241' target='_blank'> contract </a>
                    in real time.</p>
                <blockquote>
                    <li>Total Transactions: {addLogic.transactionCount}</li>
                    <li>Current Count is at: {addLogic.display}</li>
                </blockquote>
            </ul>
            <button className="waves-effect waves-light btn" onClick={addLogic.adder}>ADD</button>
            <button className="waves-effect red btn" onClick={addLogic.subtractor}>SUB</button>

        </div>
    )

}
