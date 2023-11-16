import Comman from "./Comman";
import React from "react";
const About=(props)=>{
    return(
   
      <>
     <Comman 
         name="Welcome to About page"
         imgsrc={web}
         visit="/contact"
         btname="Contact Now"
      </>
        
    );

  };

  export default About;
