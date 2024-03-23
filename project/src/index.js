import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Newproduct from './pages/Newproduct';
// import Login from './pages/Signin';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { store } from './redux/index'
import { Provider } from 'react-redux'
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from  './pages/Resetpassword';
import ParticipationPage from './pages/ParticipationPage';
import Profile from './pages/Profile';
import Job from './pages/Job';
import SearchJobs from './pages/SearchJobs';
const router=createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route  index element={<Home/>}  />
      <Route  path='menu' element={<Menu/>} />
      <Route  path='about' element={<About/>} />
      <Route  path='contact' element={<Contact />} />
      <Route  path='newproduct' element={<Newproduct/>} />
      <Route  path='login' element={<Signin/>} />
      <Route  path='signup' element={<Signup/>} />
      <Route  path='forgotpassword' element={<Forgotpassword/>} />
      <Route  path='reset_password/:id/:token' element={<Resetpassword/>} />
      <Route  path='participate' element={<ParticipationPage/>} />
      <Route  path='job' element={<Job/>} />
      <Route path="profile" element={<Profile/>} />
      <Route path="searchjob" element={<SearchJobs/>} />

    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
