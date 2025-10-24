import { Link } from "react-router-dom";
import "./Nav.css";
export const Nav = () => {
    return <nav>
      <ul>
        <li>
            < Link to={"/category/inicio"}> Inicio </Link>

        </li>
        <li>
            < Link to={"/category/contacto"}> Contacto </Link>
        </li>
        <li>
            < Link to={"/category/almacen"}> Almacen </Link>
        </li>
      </ul>

    </nav>
};