import './Hero.css'
import TenisNike from "../../assets/White-Sneakers-PNG-Clipart 1.png";
import Ornament from '../../assets/Ornament 11.png'
export default function Hero () {

    return(
        <section className="banner">
        <div className="banner-content">
          <div className="banner-text">
            <p id="title-amarelo">Melhores ofertas personalizadas</p>
            <h1 className='titleBanner'>Queima de estoque Nike🔥</h1>
            <p className='paragraphBanner'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <button className='btnBanner' type="button">Ver ofertas</button>
          </div>
          <div className="banner-image">
            <img src={TenisNike} alt=""/>
          </div>
          <img src={Ornament} id="ornament"/>
        </div>
        
      </section>
    )
}