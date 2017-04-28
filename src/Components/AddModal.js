import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class AddModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton
             
            label="About this contract" onTouchTap={this.handleOpen} />
        <Dialog
          title="Decentralized Counter"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >

 <p>A completely decentralized way to increase and decrease a number, all results sent directly to the test-net block chain. You can see your Ether and transaction change in real time by visiting the <a className='blue-text' href='https://ropsten.etherscan.io/address/0xec2f06fcef81c913ee857a62cea6a592e58db241' target='_blank'>contract.</a></p>

        </Dialog>
      </div>
    );
  }
}
