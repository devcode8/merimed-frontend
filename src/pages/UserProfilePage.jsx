import React from 'react'
import Navbar from '../features/navbar/Components/Navbar'
import UserProfile from '../features/user/Components/UserProfile'

const UserProfilePage = () => {
  return (
    <Navbar>
        <h1 className='font-bold text-3xl text-center border-b-2 border-b-black'>My Profile</h1>
        <UserProfile />
      </Navbar>
  )
}

export default UserProfilePage