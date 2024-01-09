// import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./FinancialStatements.css";

const FinancialStatements = () => {
  return (
    <div className="container-fluid">
      <div className="row position-relative h-100 d-flex">
        <div className="col-lg-3 g-0">
          <div className="financial-main">
            <div className="financial-nav">
              <h4 className="mb-4">Finalcial Statements</h4>
              <ul className="text-warning text-start side-nav">
                {/* <li><NavLink to='/financialStatements/report'>Report</NavLink></li> */}
                <li>
                  <NavLink
                    className="text-warning fs-6"
                    index
                    to="/financialStatements/sfp"
                  >
                    Financial Position
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-warning fs-6"
                    to="/financialStatements/pnl"
                  >
                    Profit or Loss
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-warning fs-6"
                    to="/financialStatements/sce"
                  >
                    Changes in Equity
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-warning fs-6"
                    to="/financialStatements/scf"
                  >
                    Cash Flow
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/financialStatements/note1-3">
                    Note (1-3)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-warning fs-6"
                    to="/financialStatements/note4-13"
                  >
                    Note (4-13)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-warning fs-6"
                    to="/financialStatements/ppe"
                  >
                    Annexure A
                  </NavLink>
                </li>
                {/* <li><NavLink to="/financialStatements/cover">Cover</NavLink></li>         */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9 outlet">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default FinancialStatements;
