import React from 'react';
import ReactDOM from 'react-dom';

import {AddSub} from './AddSub';
import './styles.css';



class MainLayout extends React.Component{
    render(){
        return(
    <div className="container">

        <AddSub />


    </div>
        )
    }
}



ReactDOM.render(
  <MainLayout />,
  document.getElementById('root')
);
