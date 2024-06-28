import "./Categorias.css";
import Tshirt from "../../assets/tshirt-_1_.png";
import Pants from "../../assets/pants.png";
import Headphones from "../../assets/headphones_1.png";
import Tenis from "../../assets/sneakers.png";
import Item from "./Item/Item";
export default function Categorias() {
  return (
    <>
      <section className="categorias">
        <h3 className="TitleColecaoemDestaque">Coleções em destaque</h3>

        <div className="options-destaque">
          <Item foto={Tshirt} label="Camisetas" />

          <Item foto={Pants} label="Calças" />

          <Item foto={Pants} label="Bonés" />

          <Item foto={Headphones} label="Headphones" />

          <Item foto={Tenis} label="Tênis" />
        </div>
      </section>
    </>
  );
}
