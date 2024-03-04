import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { cambiarDepartamento } from '../../redux/states/managerSlice';

import HomeV1 from './HomeV1';

import './Home.css';
import HomeV2 from './HomeV2';

const Home = ({ videHomeRef }) => {

  const [pintarHome2, setPintarHome2] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cambiarDepartamento(''))
  }, [dispatch])

  useEffect(()=>{
    setTimeout(()=>{
      setPintarHome2(true);
    }, 8000);
  }, [])


  return (
    <>
      <HomeV1 videHomeRef={videHomeRef} />
      {pintarHome2 && <HomeV2 />}      
    </>
  )
}

export default Home