import "./App.css";
import { Footer } from "./componentes/Footer/Footer";
import { Header } from "./componentes/Header/Header";
import { ItemlistContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { Boton } from "./componentes/Boton";
import EjemploMouse from "./componentes/Ejemplomouse";
import { Formulario } from "./componentes/Formulario/Form";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";




function App() {
 // lo que guarde de productso iba aca
  //const prod = { nombre: "Remera", precio:1000, descripcion: "HOLA"};



  return (
    <>
    <div>

     <Header />
     {/*<ItemlistContainer titulo={"Bienvenidos"}/>*/}
     <ItemDetailContainer />
     
     <Boton color={"green"} texto={"Siguiente Pagina"} />

     {/*<Formulario />*/}

     {/*<EjemploMouse />*/}
     {/*<ItemlistContainer  titulo={"Bienvenido mundo"} 
     productos = {arrayProductos}/> */}
     <Footer />
           
    </div>
    </>
  );
};

export default App;
