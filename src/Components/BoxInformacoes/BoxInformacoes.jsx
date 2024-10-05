import './BoxInformacoes.css'
export default function BoxInformacoes() {
  return (
    <>
        <div className="bodyInformacoes">
            <div className='childBody'>
                <div className='divInformacoes'>
                    <h3>Meu Perfil</h3>
                    <hr className='hrBoxInformacoes'/>
                </div>
                <div className='divInformacoes'>
                    <h3>Meus Pedidos</h3>
                    <hr className='hrBoxInformacoes'/>
                </div>
                <div className='divInformacoes'>
                    <h3>Minhas Informações</h3>
                    <hr className='hrBoxInformacoes'/>
                </div>
                <div className='divInformacoes'>
                    <h3>Métodos de Pagamentos</h3>
                </div>
            </div>
            
        </div>
    </>
  );
}