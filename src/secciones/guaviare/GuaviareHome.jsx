import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { cambiarDepartamento } from '../../redux/states/managerSlice';
import './GuaviareHome.css'

import GuaviareEntrada from './GuaviareEntrada';
import Jorge from './Jorge';

const GuaviareHome = ({ videoGuaviareRef }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

  return (
    <>
      <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
      <Jorge />
    </>
  )
}

export default GuaviareHome