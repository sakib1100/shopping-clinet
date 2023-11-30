import React, { useContext, useEffect, useState } from 'react';
import Orders from './Orders';
import { OrderContext } from '../context/OrderContext';

const Order = () => {
    const {reload} = useContext(OrderContext);

    const [dbUser,setDbUser] = useState([]);
    useEffect(() => {
        const url = 'https://new-shopping-server.onrender.com/getData';
        fetch(url)
        .then((res) => res.json())
        .then((dbData) => setDbUser(dbData))
    },[])

    const handleOnDelete = id => {
       
        const proced = window.confirm('Are you sure you want to delete?');
        if(proced){
            console.log('data delete successfully',id)
         const url = `https://new-shopping-server.onrender.com/deleteData/${id}`;
         fetch(url,{
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0){
                const remain = dbUser.filter(user => user._id !== id);
                setDbUser(remain);
                reload();
            }
         }
        )
        }
    }
    return (
        <div className=' mx-11'>
             <div className="mx-32 mt-32 mb-20 text-center  ">
      <h1 className="  sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Order Box</h1>
    

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