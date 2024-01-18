import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useEffect } from "react";

import Button from '@mui/material/Button';

import Box from '@mui/system/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Home(){

    //const [count1,setCount1] = React.useState(0);
   

      
    
    return(
        <>


  
   
  <img src='https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' id='image1'/>
      <br /> <br />
      <div id='readyMade'> 
      <h2> READYMADE COLOUR </h2> 
      <h2> COMBINATIONS </h2>
      </div>

<br /> <br />


<div id='imageContent'>
      
    <div> <img src='https://indigopaints.com/wp-content/uploads/2021/08/ccc-image-1.jpg' id='image2'/> </div> 
    
<div id='content1'> 
  <div>
  <p> Will Light Blue Look Better With Pink? Will Shades Of Green Win </p>
  <p> Compliments For My Bedroom? Which Color Combinations Will Make My </p>
  <p> Living Room Look Spacious? </p>
  </div>
  <br />
  <div>

    <p> To Find Out, Visit The Color Combination Page. Or Click The Button Below </p>
    <p> To Download All Combinations In The Form Of An Inspiration Book. </p>
  </div>
  <br />
  <div>

    <p> Go Ahead, Explore The Many Ways In Which You Can Make Your Home </p>
    <p> Look Beautiful. And Win Compliments! </p>
  </div>
  <br />
  <Box id='getsee'>
<Box> <Button variant="contained"> GET IN TOUCH </Button> </Box>
    <Box id='seeCombination'> <Button variant="contained"> SEE THE COMBINATIONS </Button> </Box> 
    </Box>
   </div>

   </div>
    
   <div id='content2'> 
  <div id='content2_one'>
  <p> Will Light Blue Look Better With Pink? Will  </p>
  <p> Shades Of Green Win Compliments For My  </p>
  <p> Bedroom? Which Color Combinations Will Make </p>
  <p> My Living Room Look Spacious? </p>
  </div>
  <br />
  <div id='content2_two'>

    <p> To Find Out, Visit The Color Combination  </p>
    <p> Page. Or Click The Button Below To  </p>
    <p> Download All Combinations In The Form Of  </p>
    <p> An Inspiration Book. </p>
  </div>
  </div>

  
   <div id='painthome'>
<p> Painting your home is exciting, but choosing the right colours, products, and house painters while ensuring your family’s safety can be a huge task. That's where we come </p>
  <p> home painting a safe and great experience! With Asian Paints Safe Painting Services, re-imagine your home as a huge canvas. </p>
<br />
<p> Start your consultation with Asian Paints Safe Painting Services and let us guide you through all the questions you may have. </p>
</div>
<br /> <br /> <br />

<div id='fourImages'> 

<div>
  <img src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-safe-painting-offerings-texture-asian-paints.webp' id='image5'/>
</div>

<div>
  <img src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/wallpaper-a-sps.webp' id='image5'/>
</div>



<div>
  <img src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-safe-painting-offerings-wood-finishes-asian-paints.webp' id='image5'/>
</div>


</div>

<div id='accordion2'>

<Accordion id='accordion1' defaultExpanded>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}> How is Mercury paints different from other paint brands? </AccordionSummary>
  <AccordionDetails> Not only are products from Indigo Paints different, but we have introduced products where none existed. Identifying and catering to niche, unique requirements of the customer has been in our DNA and products like Ceiling coat emulsion, Metallic emulsion, Floor Coat emulsion are just a few examples of how we have been trendsetters in the industry. </AccordionDetails>
 
</Accordion>
<Accordion id='accordion1'>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}> What is the difference between distemper and emulsion paint? </AccordionSummary>
  <AccordionDetails>  Emulsion Paints are water based paints which are more long-lasting when compared to distemper paint. Distempers are more conservative form of paint and has lesser durability than emulsions. Emulsions boasts of smoother finish as compared to distempers. </AccordionDetails>
  
</Accordion>
<Accordion id='accordion1'>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}> What is Mercury Floor Paint? </AccordionSummary>
  <AccordionDetails>Indigo floor paint is a tough emulsion that is designed specially to protect and beautify cemented floors, interlock tiles, cement blocks etc. that are used on driveways & walkways. This paint is washable, and resistant to fungus and algae with good abrasion resistance to handle low to medium traffic. Indigo floor coat emulsion is available in a wide variety of non- fading shades to suit your needs.</AccordionDetails>
 
</Accordion>
<Accordion id='accordion1'>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}> How Frequently Should I Paint My Home?</AccordionSummary>
  <AccordionDetails> Generally, the wear and tear to the existing coating or a special occasion or festival is what influences the frequency of painting. It can range from 3 – 8 years. </AccordionDetails>
  <AccordionDetails>  In case of interiors, the walls of the kitchen, kids’ rooms, and bathrooms tend to get dirty faster. The paint on the walls of bedrooms and living areas suffer less wear and tear</AccordionDetails>
</Accordion>
<Accordion id='accordion1'>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}> Does Indigo Paints make only floor paint? </AccordionSummary>
  <AccordionDetails> Indigo is the leading brand in floor paints. But we do offer the entire range of decorative paint products, including interior emulsions, exterior emulsions, wood coatings, putties, primers etc. Visit your nearest paint store or our website to know more. </AccordionDetails>
  
</Accordion>

</div>
        </>

    )
}

export default Home;