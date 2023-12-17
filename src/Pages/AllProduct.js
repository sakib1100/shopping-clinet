import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";
import { OrderContext } from "../context/OrderContext";

const AllProduct = ({ data }) => {
  const { reload } = useContext(OrderContext);

  const [count, setCount] = useState(1);

  const increaseNumber = () => {
    setCount(count + 1);
  };
  const decreaseNumber = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [user] = useAuthState(auth);
  const person = user?.email;

  const { name, img, price, _id } = data;
  const prices = price * count;

  const handleOnClick = () => {
    fetch("https://new-online-shoppong-server.onrender.com/postData", {
      method: "POST",
      body: JSON.stringify({
        customerId: _id,
        name,
        img,
        prices,
        quantity: count,
        email: person,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast.success("Order Submited Successfully");
        reload();
        const modal = document.querySelector(`[data-name="${name}"]`);

        modal.remove();
      });
  };

  const modalData = (name) => {
    const modal = document.querySelector(`[data-name="${name}"]`);
    modal.showModal();
  };

  const alerts = () => toast.error("Pls Login for Order");

  return (
    <div className=" ">
      <div className="card w-60 h- glass">
        <figure>
          <img className="h-40" src={img} alt="car!" />
        </figure>
        <div className="my-4 mx-4">
          <h2 className="card-title">{name}</h2>
          <h1 className="my-2 text-2xl">Price: Tk {price} </h1>
          <div className="card-actions justify-center">
            {user ? (
              <button
                onClick={() => modalData(name)}
                className="btn btn-neutral"
              >
                Buy Now
              </button>
            ) : (
              <button onClick={alerts} className="btn btn-error">
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
      {/* ..............................Show Modal...................... */}
      <div className="flex justify-center">
        <dialog
          id="modal_id"
          className="modal"
          data-name={name}
          data-testid="asifur"
        >
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="flex justify-center">
              <div>
                <img
                  className="border-5 w-64 rounded-md"
                  alt="/"
                  src={img}
                ></img>
                <p className="py-4 text-center text-2xl">
                  {" "}
                  Product Name: {name}
                </p>
                <p className="py-4 text-center text-2xl">
                  Price:- Tk <span className="font-bold">{price * count}</span>
                </p>
                <div className="flex justify-center items-center">
                  <div>
                    <div className="join">
                      <button
                        onClick={decreaseNumber}
                        className="join-item btn"
                      >
                        -
                      </button>
                      <button className="join-item mx-4">
                        <span>{count}</span>
                      </button>
                      <button
                        onClick={increaseNumber}
                        className="join-item btn"
                      >
                        +
                      </button>
                    </div>
                    <br></br>
                    <button
                      className="btn mt-2 btn-success btn-sm justify-center flex"
                      onClick={handleOnClick}
                    >
                      Order Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AllProduct;
