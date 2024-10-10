import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import InputLabel from "../../InputLabel/inputLabel";
import { updateData } from "../../../services/UsuarioServices/usuariosService";
import "./FormMinhasInformacoes.css"

export default function FormMinhasInformacoes() {
  const inputNome = useRef();
  const inputCpf = useRef();
  const inputEmail = useRef();
  const inputTelefone = useRef();
  const inputEndereco = useRef();
  const inputBairro = useRef();
  const inputCidade = useRef();
  const inputCep = useRef();
  const inputComplemento = useRef();
  const inputSenha = useRef();
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

  const submitForm = async () => {
    const usuario = {
      nome: inputNome.current.value,
      telefone: inputTelefone.current.value,
      email: inputEmail.current.value,
      cpf: inputCpf.current.value,
      senha: inputSenha.current.value,
      enderecos: [
        {
          rua: inputEndereco.current.value,
          bairro: inputBairro.current.value,
          cidade: inputCidade.current.value,
          cep: inputCep.current.value,
          complemento: inputComplemento.current.value,
        },
      ],
    };
    try {
      await updateData(usuario);
      alert("Usuário registrado com sucesso!");
      navigate("/login"); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Erro ao registrar. Tente novamente.");
    }
  };

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
      <div className="bodyFormMinhasInformacoes">
        <div className="childBodyFormMinhasInformacoes">
          <div className="divFormMinhasInformacoesTop">
            <div className="childDivFormTop">
              <h3>Meus Pedidos</h3>
              <Link to="editUserInfo">Editar</Link>
            </div>
            <hr className="hrFormMinhasInformacoes" />
          </div>
          <div className="divFormMinhasInformacoes">
            <h2>Informações pessoais</h2>
            <ul>
              {usuario ? (
                <>
                  <InputLabel
                    classCss={"inputLabelMinhasInformacoes"}
                    label={"Nome:"}
                    DefaultValue={usuario.nome}
                    inputType={"text"}
                    placeHolder={"Insira seu nome"}
                    inputRef={inputNome}
                  />
                  <InputLabel
                    classCss={"inputLabelMinhasInformacoes"}
                    label={"CPF:"}
                    inputRef={inputCpf}
                    inputType={"text"}
                    placeHolder={"Insira seu CPF"}
                  />
                  <InputLabel
                    classCss={"inputLabelMinhasInformacoes"}
                    label={"E-mail:"}
                    inputRef={inputEmail}
                    inputType={"text"}
                    placeHolder={"Insira seu email"}
                  />
                  <InputLabel
                    classCss={"inputLabelMinhasInformacoes"}
                    label={"Celular:"}
                    inputRef={inputTelefone}
                    inputType={"text"}
                    placeHolder={"Insira seu celular"}
                  />
                  <InputLabel
                    classCss={"inputLabelMinhasInformacoes"}
                    label={"Senha:"}
                    inputRef={inputSenha}
                    inputType={"password"}
                    placeHolder={"Insira sua senha"}
                  />
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
          <hr className="hrFormMinhasInformacoes" />
          <div className="divFormMinhasInformacoes">
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
