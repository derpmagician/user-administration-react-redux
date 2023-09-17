import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { modifificarUnValor, eliminarUnValor } from '../store/miSlice';
import Trabajador from '../components/Trabajador';

const Gestion = () => {
  const dispatch = useDispatch()
  const listaTrabajadores = useSelector(state => state.misTrabajadores.trabajadores)
  console.log("listaTrabajadores",listaTrabajadores)

  const actualizar = (continente, index) => {
    dispatch(modifificarUnValor({
      indice: index,
      nuevoContinente: continente
    }))
  }
  const eliminar = (candidato) => {
    console.log("antes listaTrabajadores",listaTrabajadores)
    dispatch(eliminarUnValor({
      nombre: candidato.name.first,
      apellido: candidato.name.last,
      telefono: candidato.cell,
    }));
    console.log("despues listaTrabajadores",listaTrabajadores)
  }
  return (
    <>
    <h1>Trabajadores:</h1>
    <Link to="/listado">
      <button className='btn btn-primary'>
        Candidatos
      </button>
    </Link>
    <div  className='usuarios'>
      {listaTrabajadores.map((candidato, index) => (
        <Trabajador key={index} index={index} candidato={candidato}
          onActualizar={actualizar} onEliminar={eliminar} />
      ))}
    </div>

    </>
  )
}

export default Gestion