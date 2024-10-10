import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ContentMinhasInformacoes.css"
export default function ContentMinhasInformacoes() {
  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    googleId: "",
    id: "",
    enderecos: [
      {
        bairro: "",
        cep: "",
        cidade: "",
        complemento: "",
        id: "",
        rua: "",
        usrId: "",
      },
    ],
  });

  useEffect(() => {
    const storedUsuario = JSON.parse(localStorage.getItem("usuario"));
    if (storedUsuario) {
      setUsuario(storedUsuario);
    }
    console.log(storedUsuario);
  }, []);
  console.log(usuario);
  return (
    <>
      <div className="bodyContentMinhasInformacoes">
        <div className="childBodyContentMinhasInformacoes">
          <div className="divContentMinhasInformacoesTop">
            <div className="childDivContentTop">
              <h3>Meus Pedidos</h3>
              <Link to="editUserInfo">Editar</Link>
            </div>
            <hr className="hrContentMinhasInformacoes" />
          </div>
          <div className="divContentMinhasInformacoes">
            <h2>Informações pessoais</h2>
            <ul>
              {usuario ? (
                <>
                  <li>Nome: {usuario.nome}</li>
                  <li>CPF: {usuario.cpf}</li>
                  <li>Email: {usuario.email}</li>
                  <li>Celular: {usuario.telefone}</li>
                </>
              ) : (
                <>
                  <li>Nome:</li>
                  <li>CPF:</li>
                  <li>Email:</li>
                  <li>Celular:</li>
                </>
              )}
            </ul>
          </div>
          <hr className="hrContentMinhasInformacoes" />
          <div className="divContentMinhasInformacoes">
            <h2>Informações de Entrega</h2>
            <ul>
              {usuario ? (
                <>
                  <li>Endereço: {usuario.enderecos[0].rua}</li>
                  <li>Bairro: {usuario.enderecos[0].bairro}</li>
                  <li>Cidade: {usuario.enderecos[0].cidade}</li>
                  <li>CEP: {usuario.enderecos[0].cep}</li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
