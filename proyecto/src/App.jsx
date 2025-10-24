import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./componentes/Footer/Footer";
import { Header } from "./componentes/Header/Header";
import { ItemlistContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { Boton } from "./componentes/Boton";
import EjemploMouse from "./componentes/Ejemplomouse";
import { Formulario } from "./componentes/Formulario/Form";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";




function App() {
 
  return (
    <>
    <BrowserRouter>
    <div>

     <Header />
     <Routes>
     
     <Route path="/" element={<ItemlistContainer titulo={"Bienvenidos a mi tienda"}/>}/>
     <Route path="/detail/:id" element={<ItemDetailContainer />}/>
     </Routes>
     

     <Boton color={"green"} texto={"Siguiente Pagina"} />

     {/*<Formulario />*/}

     {/*<EjemploMouse />*/}
     {/*<ItemlistContainer  titulo={"Bienvenido mundo"} 
     productos = {arrayProductos}/> */}
     <Footer />
           
    </div>
    </BrowserRouter> 
    </>
  );
};

export default App;
