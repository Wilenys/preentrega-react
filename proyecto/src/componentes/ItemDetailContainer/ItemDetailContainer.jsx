import { useEffect, useState } from "react";
import { ItemDatail } from "../ItemDetail/ItemDetail";



export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch("/data/productos.json")
        .then((res) => {
            if(!res.ok){
                throw new Error("Hubo un problema al buscar productos");
            }
            return res.json();
        })
        .then((data)=>{
            const found = data.find((p)=> p.id ==="3" );
            if (found) { 
                setDetail(found);

            } else {
                throw new Error ("Producto no se encontro");
            }
        })
        .catch((err)=>{
            console.log(err);
        });
        
    }, []);


    return <main>
        {Object.keys(detail).length ? (
            <ItemDatail   detail={detail}/> 
        ) : (
            <p>Cargando...</p>

        )}

    </main>;
};