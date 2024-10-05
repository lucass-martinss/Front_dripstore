import "./Categorias.css";

import Item from "./Item/Item";
export default function Categorias() {
  return (
    <>
      <section className="categorias">
        <h3 className="TitleColecaoemDestaque">Coleções em destaque</h3>
        <div className="options-destaque">
          <Item/>
        </div>
      </section>
    </>
  );
}
