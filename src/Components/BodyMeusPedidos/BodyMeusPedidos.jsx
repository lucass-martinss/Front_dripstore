import './BodyMeusPedidos.css'
import BoxInformacoes from '../BoxInformacoes/BoxInformacoes';
import BoxMeusPedidos from '../BoxMeusPedidos/BoxMeusPedidos';
export default function BodyMeusPedidos() {
  return (
    <>
        <div className="body">
            <BoxInformacoes></BoxInformacoes>
            <BoxMeusPedidos></BoxMeusPedidos>
        </div>
    </>
  );
}
