import CardDestaques from './Card/CardDestaques';
import './ColecoesDestaque.css'

 function ColecaoDestaque () {

    return(
        <section className="destaques">
      <div className="title-destaque">
        <h2 className='titleColecoesDestaque'>Coleções de destaque</h2>
      </div>
      <div className="card-destaque">
        <CardDestaques
         id={"card1"} 
         desconto={'30% OFF'} 
         titleCard={'Novo drop Supreme'}
         />

        <CardDestaques 
        id={"card2"} 
        desconto={"30% OFF"} 
        titleCard={'Coleção Adidas'}
        />

        <CardDestaques 
        id={"card3"} 
        desconto={"30% OFF"} 
        titleCard={'Novo Beats Bass'}
        />
        </div>
        
    </section>
    )
}
export default ColecaoDestaque;