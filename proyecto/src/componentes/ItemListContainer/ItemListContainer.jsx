import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useEffectEvent } from "react";

export const ItemlistContainer = ({titulo}) => {
    //estado
    const [productos, setProductos] = useState([]);
    useEffect (() =>{
        fetch("/data/productos.json")
        .then ((res)=>{
            if (!res.ok){
                throw new Error("Hubo un problema al buscar el producto")
            }
            return res.json ();
        })
        .then((data)=>{
            setProductos (data);

        } )
        .catch((err)=>{
            console.log(err);

        });
    }, []);

    //llamada a la una api

    return ( 
    <section>
        <h1>
           {titulo}
        </h1>

        <ItemList lista={productos}/>
       
    </section>

    );


};