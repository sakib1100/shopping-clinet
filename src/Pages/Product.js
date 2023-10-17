import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';


const Product = () => {
  const [product,setProduct] = useState([]);
  useEffect(() => {
    fetch('data.json')
  .then(res => res.json())
  .then(data => setProduct(data))
  },[])



    return (
      <div>

<div className='flex justify-center w-100 g-7 mt-16'>
      <div className='grid lg:grid-cols-4 max-sm:grid-cols-1  sm:grid-cols-2 gap-10 my-10'>
      {
     product.map(data => <AllProduct
     data={data} 
     key={data.id}
     ></AllProduct>)
       } 
      </div>
        </div>

      </div>
       
    );
};

export default Product;