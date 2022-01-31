import "../../components/styles.scss";

function Section3() {
    return(
        <div className="container-3">
            <div className="imagen-3">
                <div className="cuadrito">
                   <div id="carouselExampleIndicators" className=" carousel slide" data-bs-ride="carousel">
                        
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="titulo-3">
                                    <h5 className="texto-3">Sed ut perspiciatis</h5>
                                    <h1 className="texto">Nemo Enim</h1>
                                    <p className="tex">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                           </div>
                          <div className="carousel-item">
                            <div className="titulo-3">
                                <h5 className="texto-3">Sed ut</h5>
                                <h1 className="texto">Enim</h1>
                                <p className="tex">Sed ut perspiciatis unde omnis iste</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="titulo-3">
                                <h5 className="texto-3">Sed ut perspiciatis</h5>
                                <h1 className="texto">Nemo set up</h1>
                                <p className="tex">Totam rem aperiam.</p>
                            </div>
                          </div>
                    </div>
                        <div className="flecha-3"> 
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className= "flecha-izquierda" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="flecha-derecha" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section3;  