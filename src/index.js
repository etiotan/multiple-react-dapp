import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, Redirect} from 'react-router-dom'
import {AddSub} from './pages/AddSub';
import SideNav from './Components/SideNav'
import {About} from './pages/About'
import {Send} from './pages/Send'
import {EtioCoins} from './pages/EtioCoins'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();

class SideNavMui extends React.Component{
    render(){
        return (
             <MuiThemeProvider>
                 <SideNav/>
         </MuiThemeProvider>
        )
    }
}


class MainLayout extends React.Component{
    render(){
        return(


<div className="row">
    <HashRouter>
      <div>
        <Route path="*" component={SideNavMui}  />
        <Route exact path='/' component={About} />
        <Route exact path="/decentralized-counter" component={AddSub}/>
        <Route exact path="/send" component={Send}/>
        <Route exact path="/etio-coins" component={EtioCoins}/>
      </div>

  </HashRouter>



</div>

        )
    }
}



ReactDOM.render(
  <MainLayout />,
  document.getElementById('root')
);
