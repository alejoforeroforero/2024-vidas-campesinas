import { useEffect, useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cambiarDepartamento } from '../../redux/states/managerSlice';
import './GuaviareHome.css'

import GuaviareEntrada from './GuaviareEntrada';
import Jorge from './Jorge';
import Carlos from './Carlos';
import LoadingIcons from 'react-loading-icons';

const GuaviareHome = ({ videoGuaviareRef }) => {

  const [esconderLoading, setEsconderLoading] = useState(false)
  const [pintarJorge, setPintarJorge] = useState(false)
  const [pintarCarlos, setPintarCarlos] = useState(false)

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      setEsconderLoading(true)
    }, 2000)

    setTimeout(() => {
      setPintarJorge(true)
    }, 8000)

    setTimeout(() => {
      setPintarCarlos(true)
    }, 16000)
  })

  const lineas = [
    {
      id: 'linea-jorge',
      titulo: 'Jorge Cano'
    },
    {
      id: 'linea-carlos',
      titulo: 'Carlos Mancera'
    },
  ]

  const personaje = useSelector(state => state.managerReducer.personaje);

  return (
    <>
      {!esconderLoading &&
        <div className='portada-loader'><LoadingIcons.ThreeDots stroke="#888" fill="666" /></div>
      }

      <div className='guaviare-lineas'>
        {lineas.map(linea => {
          return <div key={linea.id}
            className={personaje === linea.id ? 'linea linea-seleccionada' : 'linea'}
          />
        })}
      </div>
      <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
      {pintarJorge && <Jorge />}
      {pintarCarlos && <Carlos />}

    </>
  )
}

export default GuaviareHome