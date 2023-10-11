import React from 'react'
import Navbar from '../features/navbar/Components/Navbar'
import UserOrders from '../features/user/Components/UserOrders'

const UserOrdersPage = () => {
  return (
    <Navbar>
        <h1 className='font-bold text-3xl text-center border-b-2 border-b-black'>My Orders</h1>
        <UserOrders />
      </Navbar>
  )
}

export default UserOrdersPage