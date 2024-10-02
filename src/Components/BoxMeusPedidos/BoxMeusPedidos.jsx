import './BoxMeusPedidos.css'
import TenisNike from "../../assets/White-Sneakers-PNG-Clipart 1.png";
export default function BoxMeusPedidos() {
  return (
    <>
        <div className="bodyMeusPedidos">
            <div className='childBodyMeusPedidos'>
                <div className='divInformacoesMeusPedidosTop'>
                    <div className='childDivTop'>
                        <h3>Meus Pedidos</h3>
                        <h3>STATUS</h3>
                    </div>
                    <hr className='hrMeusPedidos'/>
                </div>
                <div className='divInformacoesMeusPedidos'>
                    <div className='divFlex'>
                    <div className='divImg'>
                        <img src={TenisNike} alt="" />
                    </div>
                    <div className='divInformacoesPedido'>
                        <p>Pedido nº 1234567892</p>
                        <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                    </div>
                    </div>
                    <h3>Produto em Trânsito</h3>
                </div>
                <div className='divInformacoesMeusPedidos'>
                    
                </div>
                <div className='divInformacoesMeusPedidos'>
                   
                </div>
            </div>
            
        </div>
    </>
  );
}