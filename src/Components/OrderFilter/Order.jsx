import { FaArrowDown } from "react-icons/fa";
import './Order.css'
export default function OrderFilter() {

    return(

<>
    <div className="d2">
        <strong>Ordenar por:</strong> <p>mais relevantes</p>
        <FaArrowDown size={12} />
    </div>
</>

    )
}