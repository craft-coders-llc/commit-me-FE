import  "./footer.css";
import facebookImg from "/img/facebook.svg?url"

function Footer(){
    return(
        <footer className='footer-container'>
            <div>
            <a href="https://coreui.io"> &copy; Commit-me </a>
            <span className="text"> Todos los derechos reservados. Plataforma para developers, coders y entusiastas del software en España. Descubre, comparte y apúntate a los mejores eventos tech cerca de ti.</span>
            </div>

            <img className='footerSocial' src={facebookImg} />
            <p  >Facebook</p>
        </footer>
    )
}

export default Footer