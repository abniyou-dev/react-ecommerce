import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaCartPlus  } from "react-icons/fa";
import { useCart } from "../context/CartContext";


function Product() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState();
  const {state, dispatch} = useCart();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProduct(res);
      });
  }, []);
  return (
    <div className="p-12">
      {product && (
        <div className="flex gap-5">
          <div className="border p-2">
            <img src={product.image} alt="" className="aspect-square" />
          </div>
          <div
            className="grid max-w-[50%]">
            <div className="flex flex-col gap-3">
              <span className="text-3xl text-red-500">{product.title}</span>
              <span>{product.price}</span>
              <span>{product.rating.rate}</span>
              <span>{product.description}</span>
            </div>
            <div
              className="grid gap-2">
              <span>Add To :</span>
              <div
                className="space-x-2">
                <button

                  onClick={() => dispatch({type:"ADDWICHLIST", payload:product})}
                  className="bg-red-400 text-white px-5 py-2
                    rounded"><FaHeart /></button>
                <button
                  onClick={() => dispatch({type:"ADD", payload:product})}
                  className="bg-red-400 text-white px-5 py-2
                    rounded"><FaCartPlus /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
