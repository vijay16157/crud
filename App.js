import React,{useState} from 'react'

import './App.css';
import Apps from './Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import PolicyIcon from '@material-ui/icons/Policy';
import SearchIcon from '@material-ui/icons/Search';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Update from './Update';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
return (
    <div className="App">
      
      <div className="main__menu">
        
        <ul>
          <h2>Main Menu</h2>
          <li><p><DashboardIcon /></p><a href="#Dashboard">Dashboard</a> </li>
         
            <li><p><SearchIcon/></p><a href="#Discover">Discover</a></li>
            <li><p><PolicyIcon/></p><a href="#Policy">Policy</a></li>
          <li><p><YoutubeSearchedForIcon/></p><a href="#Investigate">Investigate</a></li>
          <li><p><SettingsIcon/></p><a href="#Settings">Settings</a></li>
</ul>
       
      </div>
      <div className="top">
      <div className="top__summary">
      <div class="card">
  
          <div class="container">
          <p>Open: 50</p>
    
  </div>
        </div>
        <div class="card">
  
          <div class="container">
          <p>Resolved: 10</p>
    
  </div>
        </div>
        <div class="card">
  
          <div class="container">
         
          <p>  In progress: 5</p>
  </div>
  </div>
        
         
          
          <div className="top__right">
         
          <Apps/>

         
         
        </div>
        </div>
        
        <div className="tables">
          <Update/>
        </div>
        
      </div>
      
     
     
    </div>
  );
}

export default App;
