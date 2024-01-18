import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useEffect } from "react";
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Shop(){
    return(
        <>
       <h1 id='shop'> Shop Asian Paints Products Online </h1>
<div id='shop1'> 
       <p> Welcome to the Asian Paints Online Shop, your one-stop destination to Buy Asian Products Online and transform your space into a masterpiece. At our Asian Paints Shop, we offer a plethora of options to cater to your unique decor needs.</p>
       <p> Looking for an instant revamp? Try our Wall Stickers or Peel and Stick Wallpapers. Want to get your hands dirty? Our Do it Yourself section is just for you, complete with Mechanized Tools and Spares, as well as DIY Tools. Or maybe you need guidance on the perfect shade for your walls? Our Colour Selection Tools are at your service. </p>
       <p>Each product at our Asian Paints Online Store is meticulously designed for quality, longevity, and style. So, why wait? Buy Asian Paints Products Online today and experience the magic of transformation at your fingertips.</p>
       <p> Remember, when it comes to home decor and painting solutions, Asian Paints Shop is your trusted partner. Explore, shop, and let your house tell a story! </p>
       </div>

       <h2 id='our'> Our Divisions </h2>
       <div id='our1'>
       <p> <b> Kitchen </b>  </p>
       <p> <b> Bath </b> </p>
       <p> <b> Architects </b> </p>
       <p> <b> Large Projects </b></p>
       <p> <b> Automotives </b></p>
       </div>
       <div id='onlineShop'>
       <img src='https://static.asianpaints.com/content/dam/asianpaints/ecomm-pdts/online-shop-webp-images/Desktop_Colour%20Spectra%20Cosmos%20.webp'/>
       </div>

       
<div id='copyRight'>
       <p> <CopyrightIcon id='copyRight1'/> </p>
       <p id='mercury3'> <b> Mercury </b>  </p>
       </div>
        </>
    )
}


export default Shop;