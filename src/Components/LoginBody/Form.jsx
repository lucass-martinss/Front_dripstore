import { Link } from "react-router-dom"
import Icons from "../../assets/Icons.png"

function Form() {
    return (
      <>
      <div className="Form">
        <div className="Titles">
          <h1>Acesse sua conta</h1>
          <p className="titlesForm">Novo cliente? Então registre-se  <Link to="/register" >aqui</Link> </p>
        </div>
        <div className="emailInput">
            <label htmlFor="">Login *</label>
            <input type="email" name="" placeholder="Insira seu login ou email" />
        </div>
        <div className="passwordInput">
            <label htmlFor="">Senha *</label>
            <input type="password" name="" placeholder="Insira seu login ou email"/>
            <Link  className="Link" to="/forgotPassword">Esqueci minha senha</Link>
        </div>
        <div>
          <button className="button">Acessar Conta</button>  
        </div>
        <div className="Icons">
          <p>Ou faça login como</p>
          <img src={Icons} alt="" />
        </div>

      </div>

      </>
    )
  }
  
  export default Form
  