import React from 'react';
import "./style.css";

const Home = () => {
    return (
    //    <div className='w-100'>
    //      <div className='containers'>
    //   <div>
    //     <h1 className='text-7xl max-sm:text-4xl font-bold mb-2'>Winter <br></br> Sales 2022-23</h1>
    //     <p className='text-1xl mt-7'>Discover the collection as styled by fashion in our new season compaign.</p>
    //   </div>
    //   <div>
    //     <img src='https://i.ibb.co/fS8PxjP/young-beautiful-fashionable-caucasian-woman-holds-shopping-bags-one-hand-smartphone-another-isolated.png' alt='/' />
    //   </div>
    //     </div>
    //    </div>


<div class="hero lg:min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/fS8PxjP/young-beautiful-fashionable-caucasian-woman-holds-shopping-bags-one-hand-smartphone-another-isolated.png" class="lg:max-w-xl rounded-lg " />
    <div>
      <h1 class="text-7xl max-sm:text-4xl font-bold mb-2">Winter <br></br> Sales 2022-23</h1>
     <p className='text-1xl my-4'>Discover the collection as styled by fashion in our new season compaign.</p>
     <button class="btn btn-outline lg:btn-lg font-bold mt-4">SHOP NOW</button>
    </div>
  </div>
</div>


    );
};

export default Home;