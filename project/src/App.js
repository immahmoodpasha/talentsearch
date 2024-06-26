import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlice'; 
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch= useDispatch()
  const productData= useSelector((state)=>state.product)

  useEffect(()=>{
    (async()=>{
      const res=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`)
      const resData=await res.json();
      console.log(resData)
      dispatch(setDataProduct(resData))
    })()
  },[])
  console.log(productData);
  return (
    <div >
      <Header/>
      <main className='pt-20'>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
