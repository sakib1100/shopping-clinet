import React, { useEffect, useState } from "react";
import AllProduct from "./AllProduct";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getMainData")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <div className="flex justify-center w-100 g-7 ">
        <div className="grid lg:grid-cols-4 max-sm:grid-cols-1  sm:grid-cols-2 gap-10 my-10">
          {product?.map((data) => (
            <AllProduct data={data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
