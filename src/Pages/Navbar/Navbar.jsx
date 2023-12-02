
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='sticky-top'>
    <nav className="navbar navbar-expand-lg w-auto">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/home">RS Communications Limited</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <ul className='menu-side'>
        <h1 className="">What's New</h1>
        <li><Link className="dropdown-item" to="/letters">Create Letters</Link></li>
        <li><Link className="dropdown-item" to="/financialStatements">Create Your Financial statement</Link></li>
        <li><Link className="dropdown-item" to="login">Create Your General Ledger</Link></li>
        <li><Link className="dropdown-item" to="/wPapers">Create Working Paper</Link></li>
        <li><Link className="dropdown-item" to="">Tax Calculation</Link></li>
    </ul>
    <ul>
        <li><a className="dropdown-item" href="#">Audit & Assurance</a></li>
        <li><a className="dropdown-item" href="#">Banking & Capital Markets</a></li>
        <li><a className="dropdown-item" href="#">Insurance</a></li>
        <li><a className="dropdown-item" href="#">Investment Management</a></li>
        <li><a className="dropdown-item" href="#">Real Estate</a></li>
    </ul>
    <ul>
        <li><a className="dropdown-item" href="#">Tax</a></li>
        <li><a className="dropdown-item" href="#">Tax Operate</a></li>
        <li><a className="dropdown-item" href="#">Tax Legislation</a></li>
        <li><a className="dropdown-item" href="#">Tax Technology Consulting</a></li>
        <li><a className="dropdown-item" href="#">Global Employer Services</a></li>
        <li><a className="dropdown-item" href="#">Legal Business Services</a></li>
        <li><a className="dropdown-item" href="#">Tax Services</a></li>
    </ul>
    <ul>
        <li><a className="dropdown-item" href="#">Consulting</a></li>
        <li><a className="dropdown-item" href="#">Core Business Operations</a></li>
        <li><a className="dropdown-item" href="#">Customer & Marketing</a></li>
        <li><a className="dropdown-item" href="#">Enterprise Technology & Performance</a></li>
        <li><a className="dropdown-item" href="#">Human Capital</a></li>
        <li><a className="dropdown-item" href="#">Strategy & Analytics</a></li>
    </ul>
</div>
        
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Industries
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <ul className='menu-side'>
        <li><a className="dropdown-item" href="#">What's New</a></li>
        <li><a className="dropdown-item" href="#">Create Letters</a></li>
        <li><a className="dropdown-item" href="#">Create Your Financial statement</a></li>
        <li><a className="dropdown-item" href="#">Create Your General Ledger</a></li>
        <li><a className="dropdown-item" href="#">Create Working Paper</a></li>
        <li><a className="dropdown-item" href="#">Tax Calculation</a></li>
    </ul>
    <ul>
        <li><a className="dropdown-item" href="#">Financial Services</a></li>
        <li><a className="dropdown-item" href="#">Banking & Capital Markets</a></li>
        <li><a className="dropdown-item" href="#">Insurance</a></li>
        <li><a className="dropdown-item" href="#">Investment Management</a></li>
        <li><a className="dropdown-item" href="#">Real Estate</a></li>
    </ul>
    <ul>
        <li><a className="dropdown-item" href="#">Government & Public Services</a></li>
        <li><a className="dropdown-item" href="#">Defense, Security & Justice</a></li>
        <li><a className="dropdown-item" href="#">Federal health</a></li>
        <li><a className="dropdown-item" href="#">Civil</a></li>
        <li><a className="dropdown-item" href="#">State & Local</a></li>
        <li><a className="dropdown-item" href="#">Higher Education</a></li>
    </ul>
</div>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Insights
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Careers
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to='/aboutUs'  aria-expanded="false">
            About US
          </Link>          
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>
      );
    }
export default Navbar;