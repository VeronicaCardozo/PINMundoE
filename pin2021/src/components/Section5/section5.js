import "../../components/styles.scss";

function Section5() {
    return(
        <div className="container-5">
         <div className="titulos-5">   
                <h1 className="texto-5">Get in touch</h1>
                <h1 className="texto-6">We are hiring!</h1>
                <form action="">
                    <label className="formulario-5" for="">Name</label>
                    <input className= "final-5" type="text" name="name"/>
                    <label className="formulario-5" for="">Email</label>
                    <input className= "final-5"  type="text" name="email"/>
                    <label className="formulario-5" for="">Phone</label>
                    <input className= "final-5"  type="text" name="phone"/>
                    <label className="formulario-5" for="">Message</label>
                    <input className= "final-5" type="text" name="message"/>
                    <input className="boton-5" type="submit" value="Send"/>
                </form>
            </div>
            <div className="imagen-5"></div>
        </div>



    )
    
}

 export default Section5;