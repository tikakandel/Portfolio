
import React from "react";
import weblogo from "../src/image/rocket-lunch.svg"


import Common from "./components/common.jsx"

const  Home=() => {
  return (
  <>
    
  <Common 
    name='Grow Your Business with' 
    imgsrc={weblogo}

    brandName='TK WEB SOLUTIONS'
    slogan='web design made easy'
    visit="/projects"
    
    btnname="Projects"
    />

   
  </>
  );

}

export default Home;
