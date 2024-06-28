import {  useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBoxDS from "../CheckBoxDS/CheckBoxDS";
import "./RegisterForm.css";
import api from "../../services/api";
import axios from "axios";
import InputLabel from "../InputLabel/inputLabel";
export default function RegisterForm() {
  const inputName = useRef();
  const inputCpf = useRef();
  const inputEmail = useRef();
  const inputCel = useRef();
  const inputEndereco = useRef();
  const inputBairro = useRef();
  const inputCidade = useRef();
  const inputCep = useRef();
  const inputComplement = useRef();
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [respStatus, setRespStatus] = useState("true");
  const navigate = useNavigate();

  async function submitForm() {
    await api
      .post("/clients", {
        name: inputName.current.value,
        telefone: inputCel.current.value,
        email: inputEmail.current.value,
        cpf: inputCpf.current.value,
        address: {
          street: inputEndereco.current.value,
          Neighborhood: inputBairro.current.value,
          City: inputCidade.current.value,
          Zip: inputCep.current.value,
          Complement: inputComplement.current.value,
        },
      })
      .then(() => navigate("/"));
  }
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

  const handleChange = (e) => {
    e.preventDefault();
    setCep(e.currentTarget.value)
  }
     
  useEffect(() => {
    if(cep.length === 8) {
        getCep()
    }else {
      setEndereco("")
      setCidade("");
      setBairro("");
      setRespStatus("true")
    }
  },[cep])

  return (
    <>
      <div className="registerFormContainer">
        <div className="titleRegister">
          <h1>Criar Conta</h1>
        </div>
        <div className="containerInputLabel">
          <h2>Informações Pessoais</h2>
          <hr className="hrFormIP" />
          <InputLabel 
            label={"Nome:"}
            inputRef={inputName}
            inputType={"text"} 
            placeHolder={"Digite seu nome"}
          />
          <InputLabel
            label={"Contato:"}
            inputRef={inputEndereco}
            inputType={"text"}
            placeHolder={"Digite seu número de telefone"}
          />
          <InputLabel
            label={"Email:"}
            inputRef={inputEmail}
            inputType={"text"}
            placeHolder={"Digite seu email"}
          />
          <InputLabel
            label={"CPF:"}
            inputRef={inputCpf}
            inputType={"text"}
            placeHolder={"Digite seu CPF"}
          />
        </div>
        <div className="containerInputLabelIE">
          <h2>Informação Postal</h2>
          <hr className="hrFormIE" />
            <InputLabel
              label={"CEP:"}
              placeHolder={"digite seu Cep"}              
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
              inputRef={inputCidade}
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
              inputRef={inputComplement}
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
        <button className="btnRegister" onClick={submitForm}>
          Criar conta
        </button>
      </div>
    </>
  );
}
