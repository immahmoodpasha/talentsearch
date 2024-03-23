import React, { useState } from 'react';

function Job() {
  const [data, setData] = useState(
    {
      Location:"",
      Role:"",
      Duration:"",
      Salary:"",
      JobDescription:"",
      Email:"",
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
    const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadJob`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(data)
    })
    const fetchRes= await fetchData.json()
    console.log(fetchRes);
    if(data.Location&& data.Role)
    alert(fetchRes.message)
    else
    {
      alert("enter all fields")
    }


  };



  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold">New Post</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Location">
            Location :
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Role">
            Role :
          </label>
          <input
           name="Role"
            type="text"
            id="productRole"
            className="w-64 px-3 py-2 border rounded-lg"
            value={data.Role}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productRole">
            Duration :
          </label>
          <input
           name="Duration"
            type="text"
            id="productDuration"
            className="w-64 px-3 py-2 border rounded-lg"
            value={data.Duration}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Salary">
            Salary:
          </label>
          <textarea
          name="Salary"
            id="Salary"
            type="text"
            className="w-64 px-3 py-2 border rounded-lg"
            value={data.Salary}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="JobDescription">
            JobDescription:
          </label>
          <textarea
          name="JobDescription"
            id="JobDescription"
            type="text"
            className="w-64 px-3 py-2 border rounded-lg"
            value={data.JobDescription}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
            Email :
          </label>
          <input
            name="Email"
            type="text"
            id="Email"
            className="w-64 px-3 py-2 border rounded-lg"
            value={data.Email}
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

export default Job;
