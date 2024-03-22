import React from 'react'
import { useSelector } from 'react-redux';
import CardFeature from '../components/CardFeature';

function Home() {
  const productData = useSelector((state)=>state.product.productList);
  console.log(productData);
  const homeProductCartListVegetables= productData.filter(el => el.category ==="vegetables",[])
  console.log(homeProductCartListVegetables);
  return (
    <div>
      <div className="bg-gray-100">
      <header className="bg-blue-200 text-white p-4">
        <h1 className="text-9xl font-semibold text-black"> Fastest Food Delivery  <br></br> to your HOME</h1>
        <p className="text-sm pt-6 text-5xl text-orange-800">Fresh produce delivered to your doorstep</p>
        <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 mt-4 rounded-md">Order Now</button>
      </header> 
    </div>

    <div className=''>
      <h2 className='font-bold text-2xl text-slate-800'> Fresh Vegetables</h2>
      <div className="">
        <CardFeature/>
      </div>

    </div>
    </div>

  );
}

export default Home