import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cambiarDepartamento } from '../../redux/states/managerSlice';
import './GuaviareHome.css'

import GuaviareEntrada from './GuaviareEntrada';
import Jorge from './Jorge';
import Carlos from './Carlos';

const GuaviareHome = ({ videoGuaviareRef }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

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

  console.log(personaje);

  return (
    <>
      <div className='guaviare-lineas'>
        {lineas.map(linea => {
          return <div key={linea.id}
            className={personaje === linea.id ? 'linea linea-seleccionada' : 'linea'}
          />
        })}
      </div>
      <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
      <Jorge />
      <Carlos />
    </>
  )
}

export default GuaviareHome