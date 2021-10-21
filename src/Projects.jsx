import React from "react";
import Card from "./components/card";
import Cardata from "./components/Carddata";

const Projects = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Projects</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Cardata.map((data, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={data.imgsrc}
                    title={data.title}
                    discription={data.discription}
                    web={data.web}
                    tech={data.tech}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
