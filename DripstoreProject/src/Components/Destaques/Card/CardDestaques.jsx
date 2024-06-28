/* eslint-disable react/prop-types */
import  './CardDestaques.css'
export default function CardDestaques({desconto, titleCard, id}) {

    return(
        <>
        <div className="card" id={id}>
          <div className="card-content" >
            <p className='paragraphDesconto'>{desconto}</p>
            <h3 className='titleCardDestaque'>{titleCard}</h3>
            <button className='btnComprarCardDestaque'>Comprar</button>
          </div>
         
         
        </div>
        </>
    )
}