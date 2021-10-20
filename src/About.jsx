
import React from "react";

import weblogo from "../src/image/tika_prev_ui.png"
import Common from "./components/common.jsx"

const  About=() => {
  return (
  <>

  <Common 
    about='Passionate full stack web developer from Melbourne, Victoria. Deep understanding and technical expertise in Computer Science fundamentals, JavaScript, ReactJS, Redux, NodeJS, ExpressJS, MySQL,  MongoDB, GraphQL, JWT, Bootstrap, CSS, HTML' 
    imgsrc={weblogo}
    visit="/contact"
    btnname="Contact Me"
    name="Tika Kandel"
    />
  
 </>
  );
}

export default About;

