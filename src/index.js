import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import {Card} from './Components/Card'


class MainLayout extends React.Component{
    render(){
        return(
    <div>
        <App />
        <Card />
    
    </div>
        )
    }
}



ReactDOM.render(
  <MainLayout />,
  document.getElementById('root')
);
