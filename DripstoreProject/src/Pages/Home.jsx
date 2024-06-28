
import Categorias from "../Components/Categorias/Categorias";
import ColecaoDestaque from "../Components/Destaques/ColecoesDestaque";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Header from "../Components/HomeHeader/Header";
import OfertaEspecial from "../Components/OfertaEspecial/OfertaEspecial";
import ProdutosEmAlta from "../Components/ProdutosEmAlta/ProdutosEmAlta";


function Home() {
    return (
      <>
        <Header/>
        <Hero/>
        <ColecaoDestaque/>
        <Categorias/>
        <ProdutosEmAlta/>
        <OfertaEspecial/>
        <Footer/>
      </>
    )
  }
  
  export default Home;  
