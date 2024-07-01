import Vector from '../../assets/Vector.png'
import { Link } from 'react-router-dom'
import './LoginHeader.css'
function LoginHeader() {
    return (
      <>
     <section className="head-login">
        <div className="header-login">
        <Link className='btn-login' to="/">
          <div className="logo-login">
            <img src={Vector} alt="" />
            <p>Digital Store</p>
          </div></Link>
        </div>
        </section>

      </>
    )
  }
  
  export default LoginHeader
  