import "../../components/styles.scss";

import logo from "../../img/top-logo.svg";

 function Section1(){ 
     return( 
    
        <div className="container-1">
            <div className="principal">
                <img src={logo} class="logo"/>
               
                <div className="menu">
                   <nav>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Product</a>
                        <a href="">Service</a>
                        <a href="">Contact</a>
                    </nav>
                </div>
            </div>
            <div className="carrusel">
                <div id="carouselExampleCaptions" class=" posicion carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active redondo" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className= "redondo" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="redondo" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        
                        
                            <div className="carrusel-texto">
                                <h1 className="texto-primero">Sed ut perspiciatis unde omnis iste natus</h1>
                                <p className="texto-segundo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                <button className="boton" type="submit" value="Send">Read More</button>
                            </div>
                        
                      </div>
                      <div className="carousel-item">
                        
                    
                          <div className="carrusel-texto">
                              <h1 className="texto-primero">SET UP PERSPICIATIS</h1>
                              <p className="texto-segundo"> Perspiciatis representative slide</p>
                              <button className="boton" type="submit" value="Send">More</button>
                        </div>
                        
                        </div>
                      <div className="carousel-item">
                        <div className="carrusel-texto">
                          <h5 className="texto-primero">Third slide label</h5>
                          <p className="texto-segundo">Some representative placeholder content for the third slide.</p>
                          <button className="boton" type="submit" value="Send">send</button>
                        </div>
                        
                    
                      </div>
                    </div>
                    
                  </div>
            
            </div>
            <div className="logo"></div>
            
    </div>)
}

export default Section1; 