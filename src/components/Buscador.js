import {useState} from 'react';
import PropTypes from 'prop-types';
const Buscador=({busqueda, setBusqueda})=>{
    const [valorInput,setValorInput]=useState('');
    const handleUpdate=(evento)=>{
        setValorInput(evento.target.value);
    }

    const noRecargarPagina=(evento)=>{
        evento.preventDefault();
        if(valorInput.trim().length>=1){
            setBusqueda([valorInput,...busqueda]);
            setValorInput('');
        }
        
    }

    return(
        <form onSubmit={noRecargarPagina}>
            <input type="text" value={valorInput} onChange={handleUpdate} placeholder="Ingresa tu categoria"/>
            <button type="submit">Agregar</button>
        </form>
    )
}
Buscador.propTypes={
  busqueda:PropTypes.array,
  setBusqueda:PropTypes.func
}
export default Buscador;