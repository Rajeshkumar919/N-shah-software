
import React from "react";
import web from "../src/images/img1.jpg"
const Service=()=>{
    return(
   
      <>
          <div className="my-5>
      <h1 className="taxt-center"> Our Services</h1>
      </div>
        <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                   <div className="col-md-4 col-10 mx-auto">
                      <div className="card" ">
                          <img src={web} className="card-img-top" alt=""/>
                          <div className="card-body">
                              <h5 className="card-title">
                               Card title
                              </h5>
                              <p className="card-text">
                               Some example
                              </p>
                              <a href="#" className=""btn btn-primary"> Go somewhere </a>
                          </div>
                              
                      </div>
                   </div>
              
              </div>
            </div>
        </div>
        </div>
        </>
        
    );

  };

  export default Service;
