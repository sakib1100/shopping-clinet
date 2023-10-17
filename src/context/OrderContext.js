

import React, {  useEffect, useState } from 'react'


export const OrderContext = React.createContext()
export default function OrderContextProvider({children}) {
    const [orders, setOrders] = useState(null);

    useEffect( () => {
        getOrder()
       },[])
   
   const getOrder = async () => {
     fetch('https://new-shopping-server.vercel.app/getData')
     .then(res => res.json())
     .then(dbData =>  setOrders(dbData))
   }

   const reload = () => getOrder();

  return (
    <OrderContext.Provider value={{orders, reload}}>{children}</OrderContext.Provider>
  )
}

