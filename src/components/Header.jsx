import React from 'react';
import profile from '../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between'>
             <h1 className='text-3xl font-bold'>Knowledge Cafe Vite + React</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;