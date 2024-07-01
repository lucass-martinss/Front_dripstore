import './OfertaEspecial.css'
import TAirJ from '../../assets/air-jordan.png'
export default function OfertaEspecial () {

return(

    <>
    <section className="oferta-especial">
      <div className="containerOferta-especialContent">
      <div className="img-air-jordan">
        <img src={TAirJ} alt=""/>
      </div>
      <div className="text-especial">
        <h4>Oferta especial</h4>
        <h2>Air Jordan edição de colecionador</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit.Vitae, non reprehenderit quae
          perspiciatis ipsa expedita voluptas tempora,
          temporibus ad minima repellendus corrupti.
          Illo alias doloremque ex id quas corporis
          tempora, tempore vel. 
          
        </p>
        <button> Ver oferta</button>
      </div>
      </div>


    </section></>

)

}