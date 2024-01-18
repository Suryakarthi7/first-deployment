import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useEffect } from "react";
import { Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Divider from '@mui/material/Divider';

function Paintsandcolors(){
    return(
        <>
        <div id='fourImages'>
        <p>
        <img src='https://static.asianpaints.com/content/dam/asian_paints/products/landing-pages/interior-walls-lp-thumbnail.jpg'/>
        </p>
        <p>
            <img src='https://static.asianpaints.com/content/dam/asian_paints/products/landing-pages/exterior-walls-lp-thumbnail.jpg'/>
        </p>
        <p>
            <img src='https://static.asianpaints.com/content/dam/asian_paints/products/landing-pages/wood-metal-lp-thumbnail.jpg'/>
        </p>
        <p>
            <img src='https://static.asianpaints.com/content/dam/asian_paints/products/landing-pages/adhesive-lp-thumbnail.jpg'/>
        </p>
        </div>

<div id='explore'>
        <div id='explore1'>
        <h1> Explore Ideas </h1>
        <p> Looking for wall decor ideas to refresh your space? Those empty walls are filled with possibilities - and a few additions can make a house feel like a home. If you're ready to turn those stark, bare walls into stylish centerpieces, keep reading. No matter your style, we've got the tricks that can amp up your walls and bring out your personality and taste. </p>
        <Button variant="contained"> VIEW ALL IDEAS </Button>
        </div>

        <div>
            <img src='https://static.asianpaints.com/content/dam/asian_paints/products/landing-pages/explore-ideas-living-room-lp.png'/>
        </div>

        </div>

<div id='interior1'>
        <h1 id='interior'> Interior Design Services </h1>
        <br /> <br />
        <div id='pc5'>
        <div id='pc2'>
        <div id='pc1'>
        <h2> Paint Budget</h2>
        <h2> Calculator </h2>
        <br />
        <p> Finalise a budget in just few clicks, using</p>
        <p> our calculator</p>
        </div>

        <div id='east'> <EastIcon /> </div>
        </div>

        <div id='pc2'>
        <div id='pc1'>
        <h2> Colour</h2>
        <h2> Visualiser </h2>
        <br />
        <p>See what your favourite colour looks like,</p>
        <p> before you start your painting your house.</p>
        </div>

        <div id='east'> <EastIcon /> </div>
        </div>

        <div id='pc2'>
        <div id='pc1'>
        <h2> Paint Selector</h2>
        
        <br />
        <p> Choosing the right paint for your home is </p>
        <p> now even simpler</p>
        </div>

       
        </div>
        </div>
        </div>
        <br />
        <Divider />
       
        </>

    )
}




export default Paintsandcolors;
