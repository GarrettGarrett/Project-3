import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Index from '../pages/Index';
import Show from "../pages/Show";
import Button from "@material-ui/core/Button";
import { RotateRight } from '@material-ui/icons';


function Footer(props) {
  return (
  <footer 
  style={{position:"fixed", bottom:"0", left:"0", width:"100%" }}
  id='footer' class="white-text #6200ea deep-purple accent-4" >
  <div class="container">
    <div class="row">

        
        <a id='test' class="grey-text text-lighten-3" href="/roommates/60df91acf6d4295fa04418b2">Bathrooms</a>
        <span> </span> 


        <a id='test' class="grey-text text-lighten-3" href="/roommates/60df91c3f6d4295fa04418b4">Vacuuming</a>
        <span>  </span>

        <a id='test' class="grey-text text-lighten-3" href="/roommates/60df91d7f6d4295fa04418b6">Dishes</a>
        <span>  </span>

        <a id='test' class="grey-text text-lighten-3" href="/roommates/60df91e9f6d4295fa04418b8">Mopping</a>
        <span>  </span>

        <a id='test' class="grey-text text-lighten-3" href="/roommates/60df9200f6d4295fa04418ba">Garbage</a>
        <span>  </span>

        <a id='test' class="grey-text text-lighten-3" href="/roommates/60e67f61bda5ce3c9932dfa1">Fridge</a>
        <span>  </span>

         
        

    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
    Copyright © All Rights Reserved 2021 Chore Wheel 
    
    </div>
  </div>
</footer>

  )
}

export default Footer;