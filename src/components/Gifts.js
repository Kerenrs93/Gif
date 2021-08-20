
import { useState,useEffect } from "react";
import ListaGifts from "./ListaGifts";
import { obtenerGifts } from "../helpers/obtenerGifts";

const Gifts=({item})=> {
    const [gifs,setGifs]=useState([]);

   useEffect(()=>{
        obtenerGifts(item).then((gif)=>{
            setGifs(gif);
        });
    },[item]);

    return (
       <>
        <h2>{item}</h2>
        <div className="gif-container">
            {         
                gifs.map((gif)=>{
                    return <ListaGifts key={gif.imagen} gif={gif}/>
                })
            }
        </div>
        </>
    )
}

export default Gifts