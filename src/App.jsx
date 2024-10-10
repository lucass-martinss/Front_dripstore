import LoginPage from "./Pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductPage from "./Pages/Produtos";
import RegisterPage from "./Pages/Register";
import MeusPedidos from "./Pages/MeusPedidos";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PagamentoEfetuado from "./Pages/PagamentoEfetuado";

function App() {
  return (
    <>
    <GoogleOAuthProvider clientId="363273885014-utldqho9rf7egdsi735chqr1gnqkf5l4.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<LoginPage />} />
          <Route path="produtos" element={<ProductPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="meusPedidos/*" element={<MeusPedidos/>}/>
          <Route path="pagamentoEfetuado" element={<PagamentoEfetuado/>}/>
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
