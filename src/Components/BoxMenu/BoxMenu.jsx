import { Link } from 'react-router-dom'
import './BoxMenu.css'
export default function BoxMenu() {
  return (
        <div className="bodyInformacoes">
            <div className='childBody'>
                <div className='divInformacoes'>
                    <h3>Meu Perfil</h3>
                    <hr className='hrBoxInformacoes'/>
                </div>
                <div className='divInformacoes'>
                    <Link to="pedidos-info" >Meus Pedidos</Link>
                    <hr className='hrBoxInformacoes'/>
                </div>
                <div className='divInformacoes'>
                    <Link to="minhas-informacoes" >Minhas Informações</Link>
                    <hr className='hrBoxInformacoes'/>
                </div>
                <div className='divInformacoes'>
                    <h3>Métodos de Pagamentos</h3>
                </div>
            </div>
            
        </div>
  );
}