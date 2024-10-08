import './BodyMeusPedidos.css'
import { Route, Routes} from "react-router-dom";
import BoxMenu from '../BoxMenu/BoxMenu';
import BoxMeusPedidos from '../BoxMeusPedidos/BoxMeusPedidos';
import BoxMinhasInformacoes from '../BoxMinhasInformacoes/BoxMinhasInformacoes';
export default function BodyMeusPedidos() {
  return (
    <>
        <div className="body">
            <BoxMenu></BoxMenu>
            <Routes>
          <Route path="pedidos-info" element={<BoxMeusPedidos/>}/>
          <Route path="minhas-informacoes" element={<BoxMinhasInformacoes/>}/>
        </Routes>
        </div>
    </>
  );
}
