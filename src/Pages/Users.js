import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'

const Users = () => {
    return (
        <div>
            <h2>User Profile</h2>
            <nav>
                <Link to='me'>My Profile </Link>
            </nav>
            <Routes>
                <Route path='me' element={<UserProfile />} />
                <Route path='' element />
            </Routes>
        </div>
    )
}

export default Users