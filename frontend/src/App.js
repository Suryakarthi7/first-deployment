import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './home';
import Paintsandcolors from './PaintsandColors';
import React from 'react';
import ReactDOM from 'react-dom/client';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button'; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Services from './services';
import Shop from './shop';

function App() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 
  
  return (
   <>
   
   

   <BrowserRouter>

   <div id='header'>
  
   <p id='mercury'>
   <h1 id='mercury1'> <b> Mercury </b>  </h1>
   </p>

   <p id='input2'> 
   <input id='input1' placeholder='Search'/>
   </p>

  
   <p id='icons1'>
    <p> <FavoriteBorderOutlinedIcon id='icon1'/> </p>

   <p> <Person2OutlinedIcon id='icon1'/> </p>

   <p> 
   <Badge badgeContent={1} color="primary">
      <ShoppingCartOutlinedIcon id='icon1'/>
    </Badge>
     </p>

     <p id='drawer1'>
     <p>  {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <p onClick={toggleDrawer(anchor, true)}>  <MenuIcon id='icon1'/> </p>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{style:{width:280}}}
          >

           <List>
            <ListItem>
             <ListItemText> <Link to='/shop' onClick={toggleDrawer(anchor, false)} id='services1'> <p id='fontsizetext'> SHOP </p> </Link> </ListItemText>
               </ListItem>
               <Divider />
               <ListItem>
                
             <ListItemText> <Link to='/services' onClick={toggleDrawer(anchor, false)} id='services1'> <p id='fontsizetext'> SERVICES </p> </Link> </ListItemText>
               </ListItem>
               <Divider />
               <ListItem>
             <ListItemText>  <Link to='/stores' onClick={toggleDrawer(anchor, false)} id='fontsizetext1'><p id='fontsizetext'> STORES </p></Link>   </ListItemText>
               </ListItem>
              
            </List>       
        
          </Drawer>
        </React.Fragment>
      ))} </p>
</p>

   </p>
   </div>


   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/stores' element={<Paintsandcolors />} />
        <Route path='/services' element={<Services />} />
        <Route path='/shop' element={<Shop />}/>
      </Routes>
    </BrowserRouter>


   </>
  );
}

export default App;
