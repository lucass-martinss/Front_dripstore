import {  useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBoxDS from "../CheckBoxDS/CheckBoxDS";
import "./RegisterForm.css";
import api from "../../services/api";
import axios from "axios";
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
      alert(`O cep:( ${inputCep.current.value} )  não está cadastrado banco de dados. Por favor verifique se está correto`)
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
          <div className="inputLabelContainer">
            <div className="labelInput">
              <label htmlFor="">Nome:</label>
            </div>

            <input
              className="inputLabel"
              type="text"
              placeholder="digite seu nome"
              ref={inputName}
            />
          </div>
          <div className="inputLabelContainer">
            <div className="labelInput">
              <label htmlFor="">Contato:</label>
            </div>

            <input
              className="inputLabel"
              type="text"
              placeholder="digite seu contato"
              ref={inputCel}
            />
          </div>
          <div className="inputLabelContainer">
            <div className="labelInput">
              <label htmlFor="">Email:</label>
            </div>

            <input
              className="inputLabel"
              type="text"
              placeholder="digite seu email"
              ref={inputEmail}
            />
          </div>
          <div className="inputLabelContainer">
            <div className="labelInput">
              <label htmlFor="">CPF:</label>
            </div>

            <input
              className="inputLabel"
              type="text"
              placeholder="digite seu CPF"
              ref={inputCpf}
            />
          </div>
        </div>
        <div className="containerInputLabelIE">
          <h2>Informação Postal</h2>
          <hr className="hrFormIE" />
          <div className="inputLabelContainer">
            <div className="labelInput" >
              <label htmlFor="">Cep:</label>
            </div>

            <input
              onChange={handleChange}
              className="inputLabel"
              type="text"
              placeholder="digite seu nome"
              ref={inputCep}
            />
          </div>

          <div className="inputLabelContainer">
            <div className="labelInput">
              <label htmlFor="">Endereço</label>
            </div>

            <input
              className="inputLabel"
              type="text"
              placeholder="digite seu nome"
              defaultValue={endereco}
              ref={inputEndereco}
            />
          </div>

          <div className="inputLabelContainer">
            <div className="labelInput">
              <label htmlFor="">Bairro:</label>
            </div>

            <input
              className="inputLabel"
              type="text"
              placeholder="digite seu nome"
              defaultValue={bairro}
              ref={inputBairro}
              disabled={respStatus !== "true" } 
            />
          </div>
          <div className="inputLabelContainer">
            <div className="labelInput">
              <label htmlFor="">Cidade:</label>
            </div>

            <input
              className="inputLabel"
              type="text"
              placeholder="digite seu nome"
              defaultValue={cidade}
              ref={inputCidade}
              disabled={respStatus !== "true"} 
            />
          </div>
          
          <div className="inputLabelContainer">
            <div className="labelInput">
              <label htmlFor="">Complemento:</label>
            </div>

            <input
              className="inputLabel"
              type="text"
              ref={inputComplement}
            />
          </div>
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
