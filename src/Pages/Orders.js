import React from 'react';

const Orders = ({dbUsers,handleOnDelete}) => {
    const {name,price,img,_id} = dbUsers
    return (
        <div className=''>

     
      <div class="p-2 lg:w-80 md:w-60 max-sm:w-72 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img} />
          <div class="flex-grow ">
            <h2 class="text-gray-900 title-font font-medium">{name}</h2>
            <p class="text-gray-500">{price}</p>
            <button onClick={() => handleOnDelete(_id)} className='btn mt-2 btn-sm btn-error'>Delete</button>
          </div>
        </div>
        

 
   

  </div>

        </div>
    );
};

export default Orders;