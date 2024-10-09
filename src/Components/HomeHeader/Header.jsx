import './Header.css'
import Vector from '../../assets/Vector.png'
import Search from '../../assets/search_24dp_FILL0_wght400_GRAD0_opsz24.png'
import Carrinho from '../../assets/Group 53581.png'
import VectorProfile from '../../assets/VectorProfile.png'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { logoutUser } from '../../services/UsuarioServices/usuariosService'
import ModalCarrinho from '../ModalCarrinho/ModalCarrinho'

export default function Header() {
  const [usuario, setUsuario] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const storedUsuario = JSON.parse(localStorage.getItem('usuario'));
    if (storedUsuario) {
      setUsuario(storedUsuario);
    }
  }, []);

  const handleLogout = () => {
    logoutUser();
    window.location.reload();
  };

  const handleMouseEnter = () => {
    setModalOpen(true);
  };

  const handleMouseLeave = () => {
    setModalOpen(false);
  };
  return (
    <>
      <section className="head">
        <div className="header">
          <div className="logo">
            <img className='imgVectorLogo' src={Vector} alt="" />
            <p className='paragraphLogoDS'>Digital Store</p>
          </div>
          <div className="input-search">
            <input
              className='inputSearchHeader'
              type="text"
              name=""
              id=""
              placeholder="Pesquisar produto..."
            />
            <span className="material-symbols-outlined"><img src={Search} /></span>
          </div>
          {usuario 
          ? (<>
            <div className="carrinho"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <img
                className='imgCarrinhoHeader'
                src={Carrinho}
                alt=""
              />
              {modalOpen && <ModalCarrinho/>}
            </div>
            <div className="VectorProfile">
              <img
                className='imgProfileHeader'
                src={VectorProfile}
                alt=""
              />
              <span className='usuarioName'>Olá {usuario.nome}</span>
            </div>
            
            <Link><button onClick={handleLogout}>sair</button></Link>
            </>
           )
          : (
            <>
              <div className="cadastre-se">
                <Link className='ancoraCadastreseHeader' to="/register">Cadastre-se</Link>
                <button className='btnCadastreseHeader'><Link className='btn-login' to="/login">Login</Link></button>
              </div>
              <div className="carrinho"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img
                  className='imgCarrinhoHeader'
                  src={Carrinho}
                  alt=""
                />
                {modalOpen && <ModalCarrinho/>}
              </div>
            </>)}


        </div>
        <nav className="nav-bar">
          <div id="home">
            <Link className='a1' to="/">Home</Link>
          </div>
          <div id="produtos">
            <Link className='a1' to="/produtos">Produtos</Link>
          </div>
          <div id="categorias">
            <Link className='a1' to="/categorias">Categorias</Link>
          </div>
          <div>
            <Link className='a1' to="/meusPedidos">Meus Pedidos</Link>
          </div>
        </nav>

      </section>

    </>
  );
}
