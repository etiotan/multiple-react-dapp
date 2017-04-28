import React from 'react';
import {coinbase, balance } from './contracts/connect.js'
import * as addLogic from './contracts/adder.js'
import Notifications from 'react-notify-toast';

// eventually will move address and balance to the mainlayout


// stateless
export const AddSub  = ()=> {


        return (
            <div className="container">
                <h3>Decentralized Counter</h3>
                <ul>
                    <li>Your Address: {coinbase}</li>
                    <li>Monies: {balance}
                        Ethers</li>
                    <blockquote className="count">
                        <li>Total Transactions: {addLogic.transactionCount}</li>
                        <li>Current Count is at: {addLogic.display[1].toNumber()}</li>
                    </blockquote>
                </ul>
                <button className="waves-effect waves-light btn" onClick={addLogic.adder}>ADD</button>
                <button className="waves-effect red btn" onClick={addLogic.subtractor}>SUB</button>

                <Notifications/>
            </div>
)

}
