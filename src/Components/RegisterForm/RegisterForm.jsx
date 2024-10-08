import {  useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBoxDS from "../CheckBoxDS/CheckBoxDS";
import "./RegisterForm.css";
import {createUsuario} from "../../services/UsuarioServices/usuariosService";
import axios from "axios";
import InputLabel from "../InputLabel/inputLabel";

export default function RegisterForm() {
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
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [respStatus, setRespStatus] = useState("true");
  const navigate = useNavigate();

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
       await createUsuario(usuario);
      alert("Usuário registrado com sucesso!");
      navigate("/login"); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Erro ao registrar. Tente novamente.");
    }
  };
  async  function getCep() { 
    const resp = await axios.get(`https://viacep.com.br/ws/${inputCep.current.value}/json/`)
    const data = await resp.data
    setRespStatus(data.erro)
    setBairro(data.bairro)
    setEndereco(data.logradouro)
    setCidade(data.localidade)
    if(data.erro === "true") {
      alert(`O cep:( ${inputCep.current.value} )  não está cadastrado no banco de dados. Por favor verifique se está correto`)
    }
  }

  const enderecoClean = () => {
    setEndereco("")
    setCidade("");
    setBairro("");
    setRespStatus("true")
  }
  const handleChange = (e) => {
    e.preventDefault();
    setCep(e.currentTarget.value)
  }
     
  useEffect(() => {
    if(cep.length === 8) {
        getCep()
    }else {
      enderecoClean()
    }
  },[cep])

  return (
    <>
      <div className="registerFormContainer">
        <div className="titleRegister">
          <h1>Criar Conta</h1>
        </div>
        <div className="containerInputLabel-IP">
          <h2>Informações Pessoais</h2>
          <hr className="hrFormIP" />
          <InputLabel 
            label={"Nome Completo *"}
            inputRef={inputNome}
            inputType={"text"} 
            placeHolder={"Insira seu nome"}
          />
          <InputLabel
            label={"CPF *"}
            inputRef={inputCpf}
            inputType={"text"}
            placeHolder={"Insira seu CPF"}
          />
          <InputLabel
            label={"E-mail *"}
            inputRef={inputEmail}
            inputType={"text"}
            placeHolder={"Insira seu email"}
          />
          <InputLabel
            label={"Celular *"}
            inputRef={inputTelefone}
            inputType={"text"}
            placeHolder={"Insira seu celular"}
          />
          <InputLabel
            label={"Senha *"}
            inputRef={inputSenha}
            inputType={"password"}
            placeHolder={"Insira sua senha"}
          />

          
        </div>
        <div className="containerInputLabelIE">
          <h2>Informação Postal</h2>
          <hr className="hrFormIE" />
            <InputLabel
              label={"CEP:"}
              placeHolder={"digite seu Cep"}  
              DefaultValue={cep}            
              inputRef={inputCep}
              inputOnChange={handleChange}
              inputType={"text"}
            />
            <InputLabel
              label={"Endereço:"}
              placeHolder={"digite seu endereço"}
              inputRef={inputEndereco}
              inputType={"text"}
              DefaultValue={endereco}
            />

            <InputLabel 
              label={"Bairro:"}
              placeHolder={"Digite sua cidade"}
              inputRef={inputBairro}
              inputType={"text"}
              DefaultValue={bairro}
              Disabled={respStatus !== "true"}
            />
            <InputLabel
              label={"Cidade:"}
              inputType={"text"}
              placeHolder={"digite sua cidade"}
              DefaultValue={cidade}
              inputRef={inputCidade}
              Disabled={respStatus !== "true"} 
            />
          
            <InputLabel
              label={"Complemento:"}
              inputType={"text"}
              inputRef={inputComplemento}
              placeHolder={"Digite um complemento"}     
            />
        </div>

        <div className="containerEnvEmail">
          <CheckBoxDS />
          <p>
            Quero receber por email ofertas e novidades das lojas da Digital
            Store. A frequência de envios pode variar de acordo com a interação
            do cliente.
          </p>
        </div>
        <button className="btnRegister" onClick={() => submitForm()}>
          Criar conta
        </button>
      </div>
    </>
  );
}
