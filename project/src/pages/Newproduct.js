import React, { useState } from 'react';

function Newproduct() {
  const [data, setData] = useState(
    {
      Location:"",
      who_can_see:"",
      image:"",
      price:"",
      Thoughts:"",

    }
  );
  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }
  
  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(data)
    const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(data)
    })
    const fetchRes= await fetchData.json()
    console.log(fetchRes);
    if(data.Location&& data.who_can_see)
    alert(fetchRes.message)
    else
    {
      alert("enter all fields")
    }


  };

  const uploadImage= async(e) => {
    const file = e.target.files[0];
    const data =(URL.createObjectURL(file));
    setData((preve)=>
    {
      return {
        ...preve,
        image: data
      }
    })
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold">New Post</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Location">
            Location
          </label>
          <input
            name="Location"
            type="text"
            id="Location"
            className="w-64 px-3 py-2 border rounded-lg"
            value={data.Location}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="who_can_see">
            who can see your post:
          </label>
          <select
            name="who_can_see"
            id="who_can_see"
            className="w-64 px-3 py-2 border rounded-lg"
            value={data.who_can_see}
            onChange={handleOnChange}
          >

            <option value="select">select</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
            POST RELEVENT IMAGES:
          </label>
          <input
            name="image"
            type="file"
            id="productImage"
            accept="image/*"
            onChange={uploadImage}
          />
          {data.image && (
            <img
              src={data.image}
              alt="Product Preview"
              className="mt-2 w-64 h-64 rounded-lg object-contain"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
            Username
          </label>
          <input
           name="price"
            type="text"
            id="productPrice"
            className="w-64 px-3 py-2 border rounded-lg"
            value={data.price}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Thoughts">
            Share your thoughts:
          </label>
          <textarea
          name="Thoughts"
            id="Thoughts"
            type="text"
            className="w-64 px-3 py-2 border rounded-lg"
            value={data.Thoughts}
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          UPLOAD
        </button>
      </form>
    </div>
  );
}

export default Newproduct;
