import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  }

  const [navOrder,setNavOrder] = useState([]);
    useEffect(() => {
      const url = 'https://new-shopping-server.vercel.app/getData';
        fetch(url)
        .then(res => res.json())
        .then(dbData => setNavOrder(dbData))
    },[])

    return (
        <div>
           <div className="drawer drawer-end" >
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">

    <div className="w-full navbar bg-base-300 fixed top-0 z-50">
    <div className="flex-1 px-2 mx-2 text-2xl bold-xl">Sh<span class="loading loading-ring loading-md"></span>
ppinG </div>
    
      <div className="flex-none lg:hidden">
     
        <label for="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
    
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal gap-x-1">

          <li><NavLink to='/home'>Home</NavLink></li>   
          <li><NavLink to='/gellary'>Gellary</NavLink></li>
          <li><NavLink to='/order'>Order</NavLink></li>
          {
            user?<li className='bt-accent'><NavLink to="" onClick={logOut}>SignOut</NavLink></li>: <li><NavLink to='/login'>Login</NavLink></li>
          }
          <li ><NavLink to="/orderBox"> <label tabindex="0" >
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item bg-success">{navOrder.length}</span>
        </div>
      </label></NavLink> </li>
        
          
        </ul>
      </div>
    </div>
  

  </div> 
  <div className="drawer-side z-50">
    <label for="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
    <li><NavLink to='/home'>Home</NavLink></li>   
          <li><NavLink to='/gellary'>Gellary</NavLink></li>
          <li><NavLink to='/order'>Order</NavLink></li>
          {
            user?<li className='bt-accent'><NavLink to="" onClick={logOut}>SignOut</NavLink></li>: <li><NavLink to='/login'>Login</NavLink></li>
          }
          <li ><NavLink to="/orderBox"> <label tabindex="0" >
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item bg-success">{navOrder.length}</span>
        </div>
      </label></NavLink> </li>
      
    </ul>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;