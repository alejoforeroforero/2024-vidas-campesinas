import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { cambiarDepartamento } from '../../redux/states/managerSlice';

import HomeV1 from './HomeV1';

import './Home.css';
import HomeV2 from './HomeV2';

const Home = ({ videHomeRef }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cambiarDepartamento('home'))
  }, [dispatch])


  return (
    <>
      <HomeV1 videHomeRef={videHomeRef} />
      <HomeV2 />
    </>
  )
}

export default Home