import React from "react";
import  "./portfolio.css";
//import stock
import stock from "../img/image1.PNG";
import stock1 from "../img/image2.PNG";
import stock2 from "../img/image3.PNG";
import stock3 from "../img/image4.PNG";
import stock4 from "../img/image5.PNG";
import stock5 from "../img/image6.PNG";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                I have built multiple projects using the MERN stack, including e-commerce websites, social media platforms, and web applications.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Socket io Real Time Chat App</h2>
                        <span className="w-ctegory">
                            ReactJS MongoDb ExpressJs MUI Context Api Firebase
                          </span>
                        <div className="w-more">
                          <span className="w-ctegory">
                       <button  className="btns"> <a href="https://socket-io-real-time-chat-app-production.up.railway.app/" 
                           target="_blank">  Live Demo</a> </button>  
                         
                          <button  className="btns"> <a href="https://github.com/Awais881/socket-io-Real-time-Chat-App" 
                           target="_blank"> Source Code</a> </button>  
                          </span>
                         
                        </div>
                      </div>
                     
                    </div>
                  </div>
                
              </div>
            </div>
            {/* // New card */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">E-Commerce web Add Products</h2>
                        <span className="w-ctegory">
                            ReactJS MongoDb ExpressJs MUI Context Api
                          </span>
                        <div className="w-more">
                        <span className="w-ctegory">
                       <button  className="btns"> <a href="https://tan-comfortable-badger.cyclic.app/" 
                           target="_blank">  Live Demo</a> </button>  
                         
                          <button  className="btns"> <a href="https://github.com/Awais881/JWT-Login-Signup" 
                           target="_blank"> Source Code</a> </button>  
                          </span>
                        </div>
                      </div>
                     
                    </div>
                  </div>
              
                
              </div>
            </div>
            {/* // new card */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock2} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Weather Forcaste</h2>
                          <span className="w-ctegory">
                            HTML5 CSS3   JavaScript <br /> OpenWeather Api <br /> <br />
                          
                               
                          </span>
                        <div className="w-more">

                            <span className="w-ctegory">
                       <button  className="btns"> <a href="https://awais881.github.io/Weather-Forcast/" 
                           target="_blank">  Live Demo</a> </button>  
                         
                          <button  className="btns"> <a href="https://github.com/Awais881/Weather-Forcast" 
                           target="_blank"> Source Code</a> </button>  
                          </span>
                        </div>
                      </div>
                     
                    </div>
                  </div>
               
                
              </div>
            </div>
            {/* // new card */}


            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Namaz Timing Web App</h2>
                          <span className="w-ctegory">
                            HTML5 CSS3   JavaScript <br /> Aladhan  Api <br /> <br />
                          
                               
                          </span>
                        <div className="w-more">

                            <span className="w-ctegory">
                       <button  className="btns"> <a href="https://awais881.github.io/Namaz-Timing-App/" 
                           target="_blank">  Live Demo</a> </button>  
                         
                          <button  className="btns"> <a href="https://github.com/Awais881/Namaz-Timing-App" 
                           target="_blank"> Source Code</a> </button>  
                          </span>
                        </div>
                      </div>
                     
                    </div>
                  </div>
               
                
              </div>
            </div>


            {/* // new Card */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock4} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"> Small Restaurent Web App and dummy payment checkout </h2>
                          <span className="w-ctegory">
                            ReactJs MUI Toastify Liberary
                          
                               <br />  <br />
                          </span>
                        <div className="w-more">

                            <span className="w-ctegory">
                       <button  className="btns"> <a href="https://640df685523c0312d8b628b1--restaurent-awais.netlify.app/" 
                           target="_blank">  Live Demo</a> </button>  
                         
                          <button  className="btns"> <a href="https://github.com/Awais881/Restaurant-Task" 
                           target="_blank"> Source Code</a> </button>  
                          </span>
                        </div>
                      </div>
                     
                    </div>
                  </div>
               
                
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock5} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Login Signup with  Dashboard in  Local Storage </h2>
                          <span className="w-ctegory">
                            HTML5 CSS3   JavaScript  Local Storage
                               
                          </span>
                        <div className="w-more">

                            <span className="w-ctegory">
                       <button  className="btns"> <a href="https://awais881.github.io/Local-Storage-Login-Signup/" 
                           target="_blank">  Live Demo</a> </button>  
                         
                          <button  className="btns"> <a href="https://github.com/Awais881/Local-Storage-Login-Signup" 
                           target="_blank"> Source Code</a> </button>  
                          </span>
                        </div>
                      </div>
                     
                    </div>
                  </div>
               
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
