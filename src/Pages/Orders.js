import React from 'react';

const Orders = ({dbUsers,handleOnDelete}) => {
    const {name,price,img,_id} = dbUsers;
    return (
        <div className=''>
      <div className="p-2 lg:w-80 md:w-60 max-sm:w-72 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img} />
          <div className="flex-grow ">
            <h2 className="text-gray-900 title-font font-medium">Product: {name}</h2>
            <p className="text-gray-500">Price: {price}</p>
            <button onClick={() => handleOnDelete(_id)} className='btn mt-2 btn-sm btn-error'>Delete</button>
          </div>
        </div>
        

 
   

  </div>

        </div>
    );
};

export default Orders;