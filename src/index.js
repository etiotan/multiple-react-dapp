import React from 'react';
import ReactDOM from 'react-dom';
import {AddSub} from './AddSub';
import './styles.css';
import {Card} from './Components/Card'


class MainLayout extends React.Component{
    render(){
        return(
    <div>
        <AddSub />
        <Card />

    </div>
        )
    }
}



ReactDOM.render(
  <MainLayout />,
  document.getElementById('root')
);
