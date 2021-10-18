
import React from "react";
import { NavLink } from "react-router-dom";

const  Common=(props) => {
  return (
  <>
  <section id="header" className="d-flex align-items-center">
  <div className=" container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row" > 
            <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centr flex-column">
                <h1 className="homepage-content  "> {props.name} <strong className="brand-name"> <br /> {props.brandName}</strong></h1>
                <h2 className="my-3 slogan-h2 "> {props.slogan}.</h2>
                <div className="mt-3">

                   <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                </div>

            </div>
       
            <div className="col-lg-6">
              <div className="row heroImage">
                <img src={props.imgsrc} alt="Web log " className = " col-sm image-fluid animated " />
                </div>
                {/*className="portfolio-img"  height="200px" width="150px"*/} 
            </div>
            </div>
  	  </div>
       </div>
    </div>

  </section>
  </>
  );
}

export default Common;
