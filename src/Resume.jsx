import React from "react";

const Resume = () => {
  return (
    <>
      <div
        id="header"
        className=" flex-column d-flex container-fluid col-10 align-items-center "
      >
        <div className="row flex-column ">
          <h1>Tika Kandel</h1>
          <h4 className="my-3 ">Technologies:</h4>{" "}
          <p className="my-3 justify-content">
            {" "}
            JavaScript, ReactJS, Redux, NodeJS, ExpressJS, MySQL, MongoDB,
            GraphQL, JWT, Bootstrap, CSS, HTML'{" "}
          </p>
          <div className=" my-3 justify-content ">
            <a
              className="resume"
              target="_blank"
              href="https://drive.google.com/file/d/1h1lUKl1kCq8vr8XBUYZTzNip6TdvHBvz/view"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
