import { Link, Route, Routes } from "react-router-dom";
import "./BoxMinhasInformacoes.css";
import ContentMinhasInformacoes from "./ContentMinhasInformacoes/ContentMinhasInformacoes";
import FormMinhasInformacoes from "./FormMinhasInformacoes/FormMinhasInformacoes"


export default function BoxMinhasInformacoes() {
  

  return (
    <>
          <Routes>
            <Route path="/" element={<ContentMinhasInformacoes/>}/>
            <Route path="editUserInfo" element={<FormMinhasInformacoes/>}/>
          </Routes>
    </>
  );
}
