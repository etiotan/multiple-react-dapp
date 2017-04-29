import React from 'react';
import {coinbase, balance } from './contracts/connect.js'
import * as addLogic from './contracts/adder.js'
import AddModal from './Components/AddModal'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// eventually will move address and balance to the mainlayout


// stateless
export const AddSub  = ()=> {


        return (
            <div className="col s9 right">

                <h1>Decentralized Counter</h1>

    <MuiThemeProvider>
                <AddModal />
            </MuiThemeProvider>

                <ul>
                    <li>Your Address: {coinbase}</li>
                    <li>Monies: {balance} Ethers</li>
                    <blockquote className="count">
                        <li>Total Transactions: {addLogic.transactionCount}</li>
                        <li>Current Count is at: {addLogic.display[1].toNumber()}</li>
                    </blockquote>
                </ul>
                <button className="waves-effect waves-light btn" onClick={addLogic.adder}>ADD</button>
                <button className="waves-effect red btn" onClick={addLogic.subtractor}>SUB</button>


            </div>
)

}
