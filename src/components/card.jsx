import React from "react";


const Card = (props) => {
  return (
    <>
      <div className="card-div col-sm col-md-5 col-11 mx-auto">
        <div className="card  h-100">
          <div className="col-sm card-title btn">
            <h4 className="card-title my-1">{props.title}</h4>
          </div>
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="col-sm card-body">
            <p className="card-text">{props.discription}</p>
            <p>
              <strong>{props.tech}</strong>
            </p>

            <a
              href={props.web}
              target="_blank"
              rel="noreferrer" 
              className="btn btn-outline-primary"
            >
              APP Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
