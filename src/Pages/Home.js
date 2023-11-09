import React from 'react';
import "./style.css";
import Banner from './Banner';
import { NavLink, Outlet } from 'react-router-dom';
import Review from './Review';
import Product from './Product';
import Footer from './Footer';

const Home = () => {
    return (



<div>
<div class="hero lg:min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="" class="lg:max-w-xl rounded-lg " />
    <div>
      <h1 class="text-7xl max-sm:text-4xl font-bold mb-2">Winter <br></br> Sales 2022-23</h1>
     <p className='text-1xl my-4'>Discover the collection as styled by fashion in our new season compaign.</p>
     <button class="btn btn-outline lg:btn-lg font-bold mt-4">SHOP NOW</button>
    </div> 
  </div>
</div>

<Banner />

{/* <div class="navbar bg-base-100">
  <div class="navbar-center flex">
    <ul class="menu menu-horizontal px-1">
      <li><NavLink index to="/home/product" >AllProduct</NavLink></li>
      <li><NavLink to="/home/shoes">Shoes</NavLink></li>
      <li><NavLink to="/home/mobile">Mobile</NavLink></li>
      <li><NavLink to="/home/clock">Clock</NavLink></li>
    </ul>
  </div>
 
</div> */}

<Product />

<Review />

<Footer />

</div>

    );
};

export default Home;