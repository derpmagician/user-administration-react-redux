import React, { useState, useEffect, } from 'react'
import Candidato from "./Candidato"
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { agregarUnValor } from '../store/miSlice';


const Lista = () => {
  const [candidatos, setCandidatos] = useState([]);
  const listaTrabajadores = useSelector(state => state.misTrabajadores.trabajadores)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // const [nUsers, setNUsers] = useState(6);

  const getUsers = async () => {
    setLoading(true);
    const url = `https://randomuser.me/api/?results=6`
    const res = await fetch(url)
    try {
      if (res.status === 200) {
        const data = await res.json()
        console.log(data)
        setCandidatos(data.results)
      } else console.log("hubo un error")
    } catch(e) {
      console.log(e)
    }
    setLoading(false);
  }
  useEffect(() => {
    getUsers()
  }, [])
  const buscarUno = async (indice) => {
    const url = `https://randomuser.me/api/?results=1`
    const res = await fetch(url)
    try {
      if (res.status === 200) {
        const data = await res.json()
        const provisional = [...candidatos]
        // provisional[indice] = [...data.results[0]]
        provisional[indice] = Object.assign({}, data.results[0]);

        console.log("provi2", provisional[indice])

        // console.log("mi provisional", provisional)
        setCandidatos(provisional)
      } else console.log("hubo un error")
    } catch(e) {
      console.log(e)
    }
  }
  const guardarUno = (candidato, index) => {
    const nuevoValor = {...candidato, departamento:"" }
    console.log("guardarUno",candidato)
    dispatch(agregarUnValor(nuevoValor))
    buscarUno(index);
  }
  return (
    <>
    <h1>Candidatos:</h1>
    <div className='presentacion' >
    {loading ?
      <div>Loading...</div> :
      candidatos.map((candidato, index) => (
        <Candidato key={index} candidato={candidato} index={index} onBuscarUno={buscarUno} onGuardarUno={guardarUno} />
      ))
    }
    </div>
    <hr/>
    <div className='candidatos'>
      {listaTrabajadores.map((candidato, i) => (
        <Link to="/gestion" key={i} >
          <button >{candidato.name.first}</button>
          </Link>
      ))}
    </div>
  </>
  )
}

export default Lista