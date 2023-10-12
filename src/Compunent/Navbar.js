import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <div>
           <div className="drawer drawer-end" >
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">

    <div className="w-full navbar bg-base-300 fixed top-0 z-50">
    <div className="flex-1 px-2 mx-2 text-2xl bold-xl">ShoppinG</div>
      <div className="flex-none lg:hidden">
     
        <label for="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
    
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal gap-x-1">

          <li><NavLink to='/home'>Home</NavLink></li>   
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/order'>Order</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
        
          
        </ul>
      </div>
    </div>
  

  </div> 
  <div className="drawer-side z-50">
    <label for="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
 
          <li><NavLink to='/home'>Home</NavLink></li>   
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/order'>Order</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
        
      
    </ul>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;