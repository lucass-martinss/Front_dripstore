import FilterObject from "../Filter/Filter"
import OrderFilter from "../OrderFilter/Order"
import './ProdutosBody.css'
export default function ProdutosBody() {

    return (
        <>
        <div className="containerProductPage">
        <div className="bh">
            <div><strong>Resultado para Tênis</strong><p> - 389 produtos</p></div>
            <OrderFilter/>
        </div>
        <div className="dv">
        <FilterObject/>
        </div>
        </div>
        </>
    )
}