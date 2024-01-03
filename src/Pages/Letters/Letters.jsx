// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from "react-router-dom";
// import auth from '../../firebase.init';
// import useAdmin from '../../hooks/useAdmin';
import "./Letter.css";

const Letters = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <div className="letter-nav">
            <ul className="bg-info bg-gradient text-start vh-100 text-start">
              <li>
                <NavLink to="/letters/input-field">Input Field</NavLink>
              </li>
              <li>
                <NavLink index to="/letters/document-list">
                  Document List
                </NavLink>
              </li>
              <li>
                <NavLink to="/letters/quotation">Quotation</NavLink>
              </li>
              <li>
                <NavLink to="/letters/appointment-letter">
                  Appointment Letter
                </NavLink>
              </li>
              <li>
                <NavLink to="/letters/audit-engagement-letter">
                  Audit Engagement Letter
                </NavLink>
              </li>
              <li>
                <NavLink to="/letters/professional-clearance">
                  Professional Clearance
                </NavLink>
              </li>
              <li>
                <NavLink to="/letters/team-declaration">
                  Team Declaration
                </NavLink>
              </li>
              <li>
                <NavLink to="/letters/independence-declaration">
                  Independence Declaration
                </NavLink>
              </li>
              <li>
                <NavLink to="/letters/form23b">Form 23B</NavLink>
              </li>
              <li>
                <NavLink to="/letters/bank-confirmation">
                  Bank Confirmation
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Letters;
