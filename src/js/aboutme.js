
//homepage-content
/*
      <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centr flex-column">
                <h1 className="homepage-content"> {props.name} <strong className="brand-name"> <br /> <img className="brandLogogIMG" src={props.brandLogo} alt=""/> {props.brandName}</strong></h1>
                <h2 className="my-3 slogan-h2"> {props.slogan}.</h2>
                <div className="mt-3">

                   <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                </div>

            </div>
       
            <div className="col-lg-6  h-50 ">
              <div className="row">
                <img src={props.imgsrc} alt="Web log " className = " col-sm image-fluid animated " />
                </div>
                {/*className="portfolio-img"  height="200px" width="150px"*/



                const aboutmeEL = document.getElementsByClassName('aboutme').value;
                const homepageEL= document.getElementsByClassName('homepage-content');
                const homepageEL= document.getElementsByClassName('slogan-h2');
                if(aboutmeEL=== "About"){
                aboutmeEL.addeveentListener(click, (e) =>{
                        homepageEL.setClassname("noDisplay")
                }}
                


