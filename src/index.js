import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, Redirect } from 'react-router-dom'
import {AddSub} from './AddSub';
import SideNav from './Components/SideNav'
import {About} from './Components/About'
import './styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
        <Redirect from="/" to="About" />
        <Route path="/" component={SideNavMui}  />
        <Route path='/About' component={About} />
        <Route path="/decentralized-counter" component={AddSub}/>
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
