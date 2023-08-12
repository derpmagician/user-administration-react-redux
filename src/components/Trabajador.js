import React from 'react';
import { useSelector } from 'react-redux';

const Trabajador = ({candidato, index, onActualizar, onEliminar}) => {

  const departamentos = useSelector(state => state.misDptos.departamentos)
  console.log("candidatos trab", candidato)
  return (
    <>
    <div className="columna">
      <div className="fotoUsuario">
        <img alt="foto" src={candidato.picture.large} />
      </div>
      <div className="nombreUsuarios">
        <strong>
          {candidato.name.fist} {candidato.name.last}
        </strong>
      </div>
      <div>{candidato.location.city}</div>
      <div>{candidato.location.country}</div>
      <div>
        <select onChange={(event) => onActualizar(event.target.value, index)}>
          <option>Selecciona...</option>
          {departamentos.map((esteValor, i) => (
            candidato.departamento===esteValor ?
            <option selected key={i}>{esteValor}</option> :
            <option key={i}>{esteValor}</option>
          ))}
        </select>
      </div>
      <div>
        <button className="rojo" onClick={()=>onEliminar(candidato)}>Eliminar</button>
      </div>
    </div>

    </>
  )
}

export default Trabajador