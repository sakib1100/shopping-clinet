import React from 'react';
import "./style.css";
import Banner from './Banner';
import Review from './Review';
import Product from './Product';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import DiscountProduct from './DiscountProduct';

const Home = () => {
    return (

<div>
<div className="hero lg:min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/fS8PxjP/young-beautiful-fashionable-caucasian-woman-holds-shopping-bags-one-hand-smartphone-another-isolated.png" className="lg:max-w-xl rounded-lg " />
    <div>
      <h1 className="text-7xl max-sm:text-4xl font-bold mb-2">Winter <br></br> Sales 2022-23</h1>
     <p className='text-1xl my-4'>Discover the collection as styled by fashion in our new season compaign.</p>
    <Link to="/product"><button className="btn btn-outline lg:btn-lg font-bold mt-4">SHOP NOW</button></Link>
    </div> 
  </div>
</div>

<DiscountProduct />

<Banner />

<div className='mt-10 lg:mt-16'><h1 className="lg:text-4xl text-3xl ml-3 font-bold lg:ml-9 font-mono">Our Products</h1></div>
<Product />

<Review />

<Footer />

</div>

    );
};

export default Home;