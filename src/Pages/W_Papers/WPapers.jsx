// import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const WPapers = () => {
    return (
        <div className='row'>      
      <div className='col-lg-3'>
        <ul className='bg-info bg-gradient text-start vh-100 text-start'>
          <li><NavLink index to='/wPapers/cashAnalysis'>Cash Analysis</NavLink></li>          
          <li><NavLink to='/wPapers/loanAnalysis'>Loan Analysis</NavLink></li>          
          <li><NavLink to='/wPapers/todCash'>ToD/ToC - CASH</NavLink></li>
          <li><NavLink to="/wPapers/todCapital">ToD/ToC - CAPITAL</NavLink></li>
          <li><NavLink to="/wPapers/todPpe">ToD/ToC - PPE</NavLink></li>
          <li><NavLink to="/wPapers/todBorrowings">ToD/ToC - BORROWINGS</NavLink></li>
          <li><NavLink to="/wPapers/todInvestments">ToD/ToC - INVESTMENTS</NavLink></li>
          <li><NavLink to="/wPapers/todRevenue">ToD/ToC - REVENUE</NavLink></li>
          <li><NavLink to="/wPapers/todInventories">ToD/ToC - INVENTORIES</NavLink></li>
          <li><NavLink to="/wPapers/todExp">ToD/ToC - EXP</NavLink></li>        
          <li><NavLink to="/wPapers/todTax">ToD/ToC - TAX</NavLink></li>        
          <li><NavLink to="/wPapers/movementAnalysis">Movement Analysis</NavLink></li>        
          <li><NavLink to="/wPapers/substantiveCash">Substantive Test - CASH</NavLink></li>        
          <li><NavLink to="/wPapers/substantiveRevenue">Substantive Test - REVENUE</NavLink></li>        
          <li><NavLink to="/wPapers/substantivePpe">Substantive Test - PPE</NavLink></li>        
          <li><NavLink to="/wPapers/substantiveInventories">Substantive Test - INVENTORIES</NavLink></li>        
          <li><NavLink to="/wPapers/substantiveBorrowings">Substantive Test - BORROWINGS</NavLink></li>        
        </ul>
      </div>
      <div className='col-lg-9'>
        <Outlet></Outlet>
      </div>
    </div>
    );
}

export default WPapers;
