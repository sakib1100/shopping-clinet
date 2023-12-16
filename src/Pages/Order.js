import React, { useContext, useEffect, useState } from "react";

import { OrderContext } from "../context/OrderContext";
import Orders from "./Orders";

const Order = () => {
  const { reload } = useContext(OrderContext);

  const [dbUser, setDbUser] = useState([]);
  useEffect(() => {
    const url = "https://new-online-shoppong-server.onrender.com/getData";
    fetch(url)
      .then((res) => res.json())
      .then((dbData) => setDbUser(dbData));
  }, []);

  const handleOnDelete = (id) => {
    const proced = window.confirm("Are you sure you want to delete?");
    if (proced) {
      console.log("data delete successfully", id);
      const url = `https://new-online-shoppong-server.onrender.com/deleteData/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remain = dbUser.filter((user) => user._id !== id);
            setDbUser(remain);
            reload();
          }
        });
    }
  };
  return (
    <div className=" mx-11">
      <div className=" lg:mx-32 mt-32 mb-20 text-center  ">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Your cart
        </h1>
        <div className="flex justify-center">
          <div className=" flex flex-col w-11/12 max-sm:w-full  max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-500 dark:text-gray-100">
            <ul className="flex flex-col divide-y light-400">
              {dbUser.map((dbUsers) => (
                <Orders
                  key={dbUsers._id}
                  dbUsers={dbUsers}
                  handleOnDelete={handleOnDelete}
                ></Orders>
              ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold">updating... €</span>
              </p>
              <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
