import React from 'react';
import notfound from '../../Assets/images/Not found/not-found.png';

const NotFound = () => {
    return (
        <div>
            <img className='h-screen w-full' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;