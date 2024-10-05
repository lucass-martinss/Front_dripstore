import Tshirt from "../../../assets/tshirt-_1_.png";
import Pants from "../../../assets/pants.png";
import Headphones from "../../../assets/headphones_1.png";
import Tenis from "../../../assets/sneakers.png";
import { useState,useEffect  } from "react";
import { getData } from "../../../services/CategoriaServices/categoriaService";
import "./Item.css";

const imagenCategoria = {
  'tshirt-_1_.png': Tshirt,
  'pants.png': Pants,
  'headphones_1.png': Headphones,
  'sneakers.png': Tenis,
};
export default function Item() {
  const [categorias, setCategorias] = useState([])


  
  const fetchData = async () => {
      const result = await getData()
      setCategorias(result.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
    { categorias.map((categoria) => (
    <div className="label" key={categoria.id}>
      <div id="item">
        <img src={imagenCategoria[categoria.imagemPath]} alt="" />
      </div>
      <label htmlFor="">{categoria.nome}</label>
    </div>
    ))}
    </>
  );
}
