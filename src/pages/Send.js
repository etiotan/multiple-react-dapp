import React from 'react';
import {Information} from '../contracts/connect.js';

export const Send = () => {
    return (
        <div className="container col s9 right flow-text">

            <h1>Send</h1>
            <Information/>

            <div className="input-field col s7">
                <input type="text" className="validate"/>
                <label>Send To:</label>
            </div>

            <div className="input-field col s7">
                <input type="text" className="validate"/>
                <label>Amount</label>
            </div>
            <div className="col s7">
                <button className="btn waves-effect waves-light" type="submit" name="action">Send
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </div>
    )
}
