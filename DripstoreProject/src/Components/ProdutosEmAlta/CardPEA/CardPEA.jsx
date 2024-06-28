/* eslint-disable react/prop-types */
import './CardPEA.css'
export default function CardePEA({desconto, clas, title, precode, precopor, id}) {

    return(

        <>
        <div className="label" id="port-ten-card">
    <div id={id} className="card-tenis">
      <p>{desconto}</p>
    </div>
    <p>{clas}</p>
    <h4>{title}</h4>
    <div className="preco">
      <p id="de">{precode}</p>
      <p id="por"><strong>{precopor}</strong></p>
    </div>
  </div>
  </>

    )
}