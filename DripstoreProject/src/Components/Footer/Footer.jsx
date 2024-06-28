import './Footer.css'
import LogoWhite from '../../assets/logo-white.png'
export default function Footer () {

return (

<>
<section className="footer">
      <div className="footer-content">
        <div className="col-1">
          <div className="logo" id="logo-footer">
            <img src={LogoWhite} alt=""/>
            <p className='paragraphLogoFooter' >Digital Store</p>
          </div>
          <div className='containerParagraphFooter'>
            <p className='paragraphFooter' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="redes-sociais">
            <img src="Assets/Images/redes-sociais.png" alt=""/>
          </div>
  
        </div>
        <div className="col-info">
          <h4 className='titleColInfo' >Informação</h4>
          <div id="option">
            <div>
              <p>Sobre Drip Store</p>
            </div>
            <div>
              <p>Segurança</p>
            </div>
            <div>
              <p>Wishilist</p>
            </div>
            <div>
              <p>blog</p>
            </div>
            <div>
              <p>Trabalhe conosco</p>
            </div>
            <div>
              <p>Meus Pedidos</p>
            </div>
          </div>
          
        </div>
  
        <div className="col-categorias">
          <h4 className='titleColCategorias' >Categoria</h4>
          <div id="categoria">
            
            <div>
              <p>Sobre Drip Store</p>
            </div>
  
            <div>
              <p>Segurança</p>
            </div>
  
            <div>
              <p>Wishilist</p>
            </div>
  
            <div>
              <p>blog</p>
            </div>
  
            <div>
              <p>Trabalhe conosco</p>
            </div>
  
            <div>
              <p>Meus Pedidos</p>
            </div>
  
          </div>
        </div>
        <div className="col-contato">
          <h4 className='titleColContato' >Contato</h4>
          <div id="contato">
            <div>
              <p>Av. Santos Dumont, 1510-1 <br/>
                 andar - Aldeota, Fortaleza - <br/>
                 CE, 60150161</p>
            </div>
            <div><p>(85) 3051-3411</p></div>
          </div>
        </div>
      </div>
      <div id="linha"><hr className='hrLinhaFooter'/></div>
      <div className="copy">
        <p>@ 2022 Digital College</p>
      </div>
      
    </section>
</>

)

}