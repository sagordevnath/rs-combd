import React from 'react';
import loading from '../../assets/Loading/loading.gif';

const Loading = () => {
    return (
        <div>
            <img className='w-screen' src={loading} alt="" />
        </div>
    );
};

export default Loading;