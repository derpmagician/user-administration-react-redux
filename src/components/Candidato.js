import React from 'react'

const Candidato = ({candidato, onBuscarUno, index, onGuardarUno}) => {
  return (
    <>
    <div className="usuario">
      <div className="foto">
        <img src={candidato.picture.large} alt="foto usuario"/>
      </div>
      <div className="datos">
        <div className="nombre">
          {candidato.name.title} {candidato.name.first} {candidato.name.last}
        </div>
        <div className="">
          Ubicacion: {candidato.location.city} ({candidato.location.country})
        </div>
        <div className="">
          <a href="#">{candidato.email}</a>
        </div>
        <div className="">
          <a href="#">{candidato.phone}</a>
        </div>
      </div>
      <div className="botones">
        <button className="rojo" onClick={() => onBuscarUno(index)} >Ocultar</button>
        <button className="verde" onClick={() => onGuardarUno(candidato, index)}>Guardar</button>
      </div>
    </div>
    </>
  )
}

export default Candidato