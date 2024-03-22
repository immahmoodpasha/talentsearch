import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import { loginRedux } from '../redux/userSlice';
function Signin() {

    const [formData, setFormData] = useState({ 
        email: '',
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
        const {email,password}= formData
        if(email && password)
        {
          const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
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
          alert("enter valid fields")
        }
        

        
      };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
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
                Sign In
              </button>
              <br/>
              <p>Dont have account? </p><Link to={"/signup"} className='text-green-400' > SignUp</Link>
              <br/>
              <p>forgot password </p><Link to={"/forgotpassword"} className='text-green-400' >Click here</Link>
            </form>
          </div>
        </div>
      );
}

export default Signin;