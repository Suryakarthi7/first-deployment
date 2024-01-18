import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useEffect } from "react";
import { Button } from '@mui/material';



function Services(){

  // <p> <img src='https://static.asianpaints.com/content/dam/asian_paints/services/services-lp-beautiful-homes-crosslink-asian-paints.jpg.transform/cc-width-522-height-264/image.jpg'/> </p> 
    return(
        <>
        <h1 id='whyasian'> Why choose Asian Paints services? </h1>

<div id='explore'>
        <div>
            <img src='https://static.asianpaints.com/content/dam/asian_paints/services/services-lp-filter-expert-advice-asian-paints.jpg'/>
          <div id='expert'>
            <p> Expert Site </p>
            <p> Supervision </p>
            </div>
        </div>

        <div>
            <img src='https://static.asianpaints.com/content/dam/asian_paints/services/services-lp-filter-trained-professional-asian-paints.jpg'/>
          <div id='expert'>
            <p> Trained </p>
            <p> Professionals </p>
            </div>
        </div>

        <div>
            <img src='https://static.asianpaints.com/content/dam/asian_paints/services/services-lp-filter-dust-free-mechanised-asian-paints.jpg'/>
          <div id='expert'>
            <p> Dust Free </p>
            <p> Mechanised </p>
            <p> Painting </p>
            </div>
        </div>

        <div>
            <img src='https://static.asianpaints.com/content/dam/asian_paints/services/services-lp-filter-superior-finish-asian-paints.jpg'/>
          <div id='expert'>
            <p> Superior Finish </p>
            
            </div>
        </div>

        <div>
            <img src='https://static.asianpaints.com/content/dam/asian_paints/services/services-lp-filter-full-home-cleaning-after-painting-asian-paints.jpg'/>
          <div id='expert'>
            <p> Full Home </p>
            <p> Cleaning After </p>
            <p> Painting </p>
            </div>
        </div>
        </div>

<div id='images3'>
        <h1 id='whyasian'> Home Improvement Services we offer </h1>
        <div id='images1'>
       <div id='images'>
      <p> <img src='https://static.asianpaints.com/content/dam/asian_paints/services/services-lp-painting-services-asian-paints-m.jpg.transform/cc-width-522-height-264/image.jpg'/> </p> 
     <p> Looking for hassle-free home painting? Our Asian Paints service  offers Expert Supervision to ensure a stress-free experience. Trust us to handle your painting needs with care and precision. </p>
    <p> <span> <b>Interior Home Painting </b></span> <span id='home1'><b>Exterior Home Painting</b> </span></p>  
    <p><span><b> Waterproofing</b> </span></p> 
    <Button variant="contained"> Know More </Button>
</div>
    <div id='images'>
      <p> <img src='https://static.asianpaints.com/content/dam/asian_paints/services/services-lp-beautiful-homes-crosslink-asian-paints.jpg.transform/cc-width-522-height-264/image.jpg'/> </p> 
     <p>Our décor experts study the existing décor and understand requirements in the first visit. We transform your space into the home of your dreams within timelines. </p>
    <p> <span> <b>Modular Kitchen </b></span> <span id='home1'><b>Lighting</b> </span></p>  
    <p><span><b> Furniture and Furshings</b> </span></p> 
    <Button variant="contained"> Know More </Button>
       </div>
       </div>
       </div>
        </>
    )
}


export default Services;