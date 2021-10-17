
import React from "react";
import weblogo from "../src/image/rocket-lunch.svg"
import brandLogo from "../src/image/Projects/TK_home_icon.svg"

import Common from "./components/common.jsx"

const  Home=() => {
  return (
  <>
  <Common 
    name='Grow Your Business with' 
    imgsrc={weblogo}
    brandLogo={brandLogo}
    brandName='WEB SOLUTIONS'
    slogan='web design made easy'
    visit="/projects"
    btnname="Get Started"
    />
  </>
  );

}

export default Home;
