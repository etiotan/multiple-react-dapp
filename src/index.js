import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, Redirect } from 'react-router-dom'
import {AddSub} from './pages/AddSub';
import SideNav from './Components/SideNav'
import {About} from './pages/About'
import {Send} from './pages/Send'
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
        {/* <Redirect from="/" to="about" /> */}
        <Route path="/" component={SideNavMui}  />
        <Route path='/about' component={About} />
        <Route path="/decentralized-counter" component={AddSub}/>
        <Route path="/send" component={Send}/>
        <Route/>
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
