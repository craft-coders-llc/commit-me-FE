import  "./footer.css";
import facebookImg from "/img/facebook.svg?url"
import twitterImg from "../../../public/img/equis.svg"
import instagramImg from "../../../public/img/instagram.svg"
import tiktokImg from "../../../public/img/tiktok.svg"
import youtubeImg from "../../../public/img/youtube.svg"

function Footer() {
    return (
      <footer className='footer-container'>
        <div>
          <a href="https://coreui.io">&copy; Commit-Me. </a>
          <span className="text">
            Todos los derechos reservados. Plataforma para developers, coders y entusiastas del software en España. 
            <br></br>Descubre, comparte y apúntate a los mejores eventos tech cerca de ti.
          </span>
        </div>
        <div className="icons">
          <img src={instagramImg} alt="Instagram" />
          <img src={facebookImg} alt="Facebook" />
          <img src={twitterImg} alt="Twitter" />
          <img src={tiktokImg} alt="TikTok" />
          <img src={youtubeImg} alt="Youtube" />
        </div>
      </footer>
    );
  }
  

export default Footer