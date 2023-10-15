import React, { useEffect, useState } from 'react';
import Orders from './Orders';

const Order = () => {
    const [dbUser,setDbUser] = useState([]);
    useEffect(() => {
        fetch('https://shopping-server-jmlx21ovj-sakib1100.vercel.app/getData')
        .then(res => res.json())
        .then(dbData => setDbUser(dbData))
    },[])

    const handleOnDelete = id => {
       
        const proced = window.confirm('Are you sure you want to delete?');
        if(proced){
            console.log('data delete successfully',id)
         const url = `https://shopping-server-jmlx21ovj-sakib1100.vercel.app/deleteData/${id}`;
         fetch(url,{
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0){
                const remain = dbUser.filter(user => user._id !== id);
                setDbUser(remain);
                
            }
         }
        )
        }
    }
    return (
        <div className=''>
             <div className="mt-40 mb-20 text-center  ">
      <h1 class="  sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Order Box</h1>
    

<div className='grid lg:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-2'>
{
    dbUser.map(dbUsers => <div className='mx-auto'> <Orders
    key={dbUsers._id}
    dbUsers={dbUsers}
    handleOnDelete={handleOnDelete}
    ></Orders> </div>)
}
</div>
</div>
        </div>
     
    );
};

export default Order;