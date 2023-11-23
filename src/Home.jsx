import Comman from "./Comman";

import React from "react";
import web from "../src/images/img1.jpg"; 
import { NavLink } from "react-bootstrap";
const Home=()=>{
    return(
   
      <>
      <Comman 
         name="Grow your Business with "
         imgsrc={web}
         visit="/service"
         btname="Get Started"
      
      />
      </>
        
    );

  };

  export default Home;
