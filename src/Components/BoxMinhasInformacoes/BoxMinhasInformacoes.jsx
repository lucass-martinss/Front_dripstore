import { Link } from "react-router-dom";
import "./BoxMinhasInformacoes.css";
import { useEffect, useState } from "react";

export default function BoxMinhasInformacoes() {
  const [usuario, setUsuario] = useState(null);
  const [endereco, setEndereco] = useState(null)

  useEffect(() => {
    const storedUsuario = JSON.parse(localStorage.getItem('usuario'));
    const storedEndereco = JSON.parse(localStorage.getItem('endereco'));
    if (storedUsuario) {
      setUsuario(storedUsuario);
    }
    console.log(storedUsuario)
  }, []);
  console.log(usuario)
  return (
    <>
     
      <div className="bodyMinhasInformacoes">
        <div className="childBodyMinhasInformacoes">
          <div className="divInformacoesMinhasInformacoesTop">
            <div className="childDivTop">
              <h3>Meus Pedidos</h3>
              <Link>Editar</Link>
            </div>
            <hr className="hrMinhasInformacoes" />
          </div>

          <div className="divInformacoesMinhasInformacoes">
            <h2>Informações pessoais</h2>
            <ul>
              <li>Nome: {usuario != null ? usuario.nome : ""}</li>
              {/* <Label
                label={`Nome: ${usuario != null ? usuario.nome : ""}`}
              /> */}
              <li>CPF: {usuario != null ? usuario.cpf : ""}</li>
              <li>Email: {usuario != null ? usuario.email : ""}</li>
              <li>Celular: {usuario != null ? usuario.telefone : ""}</li>
            </ul>
          </div>
          <hr className="hrMinhasInformacoes" />
          <div className="divInformacoesMinhasInformacoes">
            <h2>Informações de Entrega</h2>
            <ul>
              <li>Endereço: {usuario != null ? usuario.enderecos[0].rua : ""}</li>
              <li>Bairro: {usuario != null ? usuario.enderecos[0].bairro : ""}</li>
              <li>Cidade: {usuario != null ? usuario.enderecos[0].cidade : ""}</li>
              <li>CEP: {usuario != null ? usuario.enderecos[0].cep : ""}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
