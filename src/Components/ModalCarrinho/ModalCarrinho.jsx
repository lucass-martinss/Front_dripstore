import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./ModalCarrinho.css"
import TenisNike from "../../assets/White-Sneakers-PNG-Clipart 1.png";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function ModalCarrinho() {
    const [open, setOpen] = React.useState(false);



    return (
        <div className='modal'>
            <h3>Meus Pedidos</h3>
            <div className='bodyModal'>
                <hr className='hrModal' />
                <div className='informacoesPedido'>
                    <div className='divImgModal'>
                        <img src={TenisNike} alt="" />
                    </div>
                    <div className='divInformacoesPedidoModal'>
                        <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                    </div>
                </div>
                <div className='divPreco'>
                    <h3 className='precoPromocao'>R$ 219,00</h3>
                    <h3 className='preco'>R$ 219,00</h3>
                </div>

                <hr className='hrModalBottom' />
            </div>

            <div className='bottomModal'>
                <div className='bottomModalTop'>
                    <h3>Valor Total:</h3>
                    <h3 className='valorPreco'>R$ 219,00</h3>
                </div>

                <div className='bottomModalBottom'>
                    <h2>Esvaziar</h2>
                    <button className='btnVerCarrinho'>Ver Carrinho</button>
                </div>
            </div>

        </div>
    );
}
