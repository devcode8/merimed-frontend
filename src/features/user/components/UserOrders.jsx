import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserOrderAsync, selectUserOrders } from "../userSlice";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const UserOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectUserOrders);
  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync());

  }, [dispatch]);
  return (
    <>
      {orders ? (
        orders.map((order, index) => (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-start min-h-fit border-b-2  border-b-gray-500">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 my-2">
              Order number: #{order.id}
            </h1>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 ">
              Order : <span className={`text-orange-600`}>{order.status}</span>
            </h1>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flow-root">
                <ul className="flex flex-col-reverse justify-center items-start">
                  {order.items.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.thumbnail}
                          alt={item.product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to={`/product-detail/${item.product.id}`}>
                                {item.product.title}
                              </Link>
                            </h3>
                            <p className="ml-4">
                              ₹
                              {Math.round(
                                item.product.price *
                                  (1 - item.product.discountPercentage / 100)
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty:{item.quantity}
                            </label>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>₹{order.totalAmount}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total Items in Cart</p>
                <p>{order.totalItems} items</p>
              </div>

              <li key={index} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="mt-0.5 text-lg font-bold text-black">
                      Shipping Address:
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {order.selectedAddress.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {order.selectedAddress.street},{" "}
                      {order.selectedAddress.city}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {order.selectedAddress.pinCode}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {order.selectedAddress.phone}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {order.selectedAddress.State}
                  </p>
                </div>
              </li>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full grid place-items-center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="rgb(59 130 246)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default UserOrders;
