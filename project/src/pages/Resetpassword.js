import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import { loginRedux } from '../redux/userSlice';
function Resetpassword() {
  const [formData, setFormData] = useState({ 
    password: '',
  });
  const navigate = useNavigate(); 
  const userData=useSelector((state)=>state.user)
  const dispatch=useDispatch()




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {password}= formData
    if(password)
    {
      const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/forgot-password`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(formData)
      })
      const dataRes= await fetchData.json()
      alert(dataRes.message)
      if(dataRes.alert){
        dispatch(loginRedux(dataRes))
        navigate("/")
      }
      console.log(userData)
      

    }
    else{
      alert("enter valid email")
    }
    

    
  };

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h3 className="text-2xl font-semibold mb-4">Forgotpassword</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              NEW PASSWORD
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.password}
              onChange={handleChange}
              className="border rounded py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;