import React from "react";
import web from "../src/images/img1.jpg";
import { NavLink} from "react-router-dom";
const Card =(props)=>{
 return (

  <>

              <div className="col-md-4 col-10 mx-auto">
                      <div className="card" ">
                          <img src={props.web} className="card-img-top" alt={props.imgsrc}/>
                          <div className="card-body">
                              <h5 className="card-title font-weight-bold">
                               {props.title}
                              </h5>
                              <p className="card-text">
                              Some example
                              </p>
                              <NaveLink to="" className=""btn btn-primary"> Go somewhere </NaveLink>
                          </div>
                              
                      </div>
                   </div>
   
 
  
  </>

   
 )


  
}
