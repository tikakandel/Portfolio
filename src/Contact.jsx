import React, {useState} from "react";

const Contact = () => {

  const [data, setData]= useState({
    fullname: "",
    phone:"",
    email:"",
    message:""
  })
  const InputEvent =(event) =>{
    const { name, value} = event.target;
    setData((previousValue)=>{
      return{
        ...previousValue,[name]:value,
      }

    })



  }

  const formSubmit= (e)=>{
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. 
      My mobile number is ${data.phone}. 
      My email is ${data.email}. 
      This is my message ${data.message}.`
    )

  };

  return (
    <>
      <section id="header" className="d-flex align-items-center">
    
      <div className="container Contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <h1 className="text-center">Contact Me</h1>
           <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="John Do"
              />
              <label 
               htmlFor="exampleFormControlInput1"
              className="form-label">
                Contact Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="Mobile Number"
              />

              <label 
               htmlFor="exampleFormControlInput1" 
              className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com"
                
              />
            </div>
            <div className="mb-3">
              <label 
               htmlFor="exampleFormControlTextarea1" 
              className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                value={data.message}
                onChange={InputEvent}
              ></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
     
      </section>
      
    </>
  );
};

export default Contact;
