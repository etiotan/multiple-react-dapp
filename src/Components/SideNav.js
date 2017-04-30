import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


import {Link} from 'react-router-dom'






const style ={
    margin: 0,
    padding: 0,
}

export default class SideNav extends React.Component {

      constructor(props) {
        super(props);
        this.state = {open: false};
      }

      handleToggle = () => this.setState({open: !this.state.open});

      handleClose = () => this.setState({open: false});

      render() {


        return (

          <div>
            <RaisedButton
              label="Menu"
              style={style}
              onTouchTap={this.handleToggle}
            />

            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem
                  containerElement={<Link to="/about" />}
                  onTouchTap={this.handleClose}>
                  About
             </MenuItem>
              <MenuItem
                  containerElement={<Link to="/decentralized-counter" />}
                  onTouchTap={this.handleClose}>
                  Decentralized Counter
               </MenuItem>
               <MenuItem
                   containerElement={<Link to="/send" />}
                   onTouchTap={this.handleClose}>
                  Send
                </MenuItem>
            </Drawer>

          </div>
        );
      }
    }
