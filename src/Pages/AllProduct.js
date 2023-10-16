import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';
import { toast } from 'react-toastify';


const AllProduct = ({data}) => {
 

  const [user] = useAuthState(auth);

    const {name,img,price} = data;

  const handleAddToProduct = () => {

    fetch('https://new-shopping-server-jmmg.vercel.app/post-data', {
      method: 'POST',
      body: JSON.stringify({
   name,img,price

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => toast.success('Order Submited Successfully'));
  
     console.log('submiteed successfully')
  }


const alerts = () =>  toast.info("Pls Login for Order");

// alert('LOGIN FIRST')


    return (
        <div className='mx-6 '>
<div class="card w-60 h- glass">
  <figure><img className='h-40' src={img} alt="car!"/></figure>
  <div class="my-4 mx-4">
    <h2 class="card-title">{name}</h2>
   <h1 className='my-2 text-2xl'>Price : ${price}</h1>
    <div class="card-actions justify-center">
      {
        user? <button  onClick={() => handleAddToProduct(data)} class="btn btn-neutral">Buy Now</button> : <button onClick={alerts}  class="btn btn-error">Buy Now</button>

      }
    </div>
  </div>
</div>
        </div>
    );
};

export default AllProduct;