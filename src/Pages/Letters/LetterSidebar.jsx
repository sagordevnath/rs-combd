import React from "react";
import { NavLink } from "react-router-dom";

const LettersSidebar = () => {
  return (
    <div className='drawer drawer-mobile mt-20'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col '>
        {/* <!-- Page content here --> */}
        {/* <h1 className='text-3xl text-primary font-bold'>Welcome to Letters</h1>         */}
      </div>
      <div className='drawer-side '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80'>
          <li>
            <NavLink to='/letters/quotation'>Quotation</NavLink>
          </li>
          <li>
            <NavLink to='/letters/appointmentletter'>Appointment Letter</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default LettersSidebar;