
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentLetter from './Pages/Letters/AppointmentLetter';
import AuditEngagementLetter from './Pages/Letters/AuditEngagementLetter';
import BankConfirmation from './Pages/Letters/BankConfirmation';
import DocumentList from './Pages/Letters/DocumentList';
import Form23B from './Pages/Letters/Form23B';
import IndependenceDeclaration from './Pages/Letters/IndependenceDeclaration';
import InputField from './Pages/Letters/InputField';
import Letters from './Pages/Letters/Letters';
import ProfessionalClearance from './Pages/Letters/ProfessionalClearance';
import Quotation from './Pages/Letters/Quotation';
import TeamDeclaration from './Pages/Letters/TeamDeclaration';
import Footer from './Pages/Footer/Footer';
import Blog from './Pages/Home/Blog';
import Home from './Pages/Home/Home';
import Industries from './Pages/Home/Industries';
import Services from './Pages/Home/Services';
import Navbar from './Pages/Navbar/Navbar';
import NotFound from './Pages/NotFound/NotFound';
import WPapers from './Pages/W_Papers/WPapers';
import TodCash from './Pages/W_Papers/TodCash/TodCash';
import CashAnalysis from './Pages/W_Papers/CashAnalysis/CashAnalysis';
import LoanAnalysis from './Pages/W_Papers/LoanAnalysis/LoanAnalysis';
import TodCapital from './Pages/W_Papers/TodCapital/TodCapital';
import TodPpe from './Pages/W_Papers/TodPpe/TodPpe';
import TodBorrowings from './Pages/W_Papers/TodBorrowings/TodBorrowings';
import TodInvestments from './Pages/W_Papers/TodInvestments/TodInvestments';
import TodRevenue from './Pages/W_Papers/TodRevenue/TodRevenue';
import TodInventories from './Pages/W_Papers/TodInventories/TodInventories';
import TodExp from './Pages/W_Papers/TodExp/TodExp';
import TodTax from './Pages/W_Papers/TodTax/TodTax';
import MovementAnalysis from './Pages/W_Papers/MovementAnalysis/MovementAnalysis';
import SubstantiveCash from './Pages/W_Papers/SubstantiveCash/SubstantiveCash';
import SubstantiveRevenue from './Pages/W_Papers/SubstantiveRevenue/SubstantiveRevenue';
import SubstantivePpe from './Pages/W_Papers/SubstantivePpe/SubstantivePpe';
import SubstantiveInventories from './Pages/W_Papers/SubstantiveInventories/SubstantiveInventories';
import SubstantiveBorrowings from './Pages/W_Papers/SubstantiveBorrowings/SubstantiveBorrowings';
import About from './Pages/Home/About';
import FinancialStatements from './Pages/FinancialStatements/FinancialStatements';
import Report from './Pages/FinancialStatements/Report';
import Sfp from './Pages/FinancialStatements/Sfp';
import Pnl from './Pages/FinancialStatements/Pnl';
import Sce from './Pages/FinancialStatements/Sce';
import Scf from './Pages/FinancialStatements/Scf';
import Note1To3 from './Pages/FinancialStatements/Note1-3';
import Note4To13 from './Pages/FinancialStatements/Note4-13';
import Ppe from './Pages/FinancialStatements/Ppe';
import Cover from './Pages/FinancialStatements/Cover';
import Login from './Pages/Profile/Login';
import Register from './Pages/Profile/Register';

function App() {
  
  return (
    <div className='text-white text-start'>
      <Navbar className='' /> 
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='*' element ={<NotFound />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/industries' element={<Industries />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/aboutUs' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        
        <Route path='letters' element={<Letters />}>          
            <Route index path='quotation' element={<Quotation />}></Route>
            <Route index path='document-list' element={<DocumentList />}></Route>
            <Route index path='input-field' element={<InputField />}></Route>
            <Route index path='appointment-letter' element={<AppointmentLetter />}></Route>
            <Route index path='audit-engagement-letter' element={<AuditEngagementLetter />}></Route>
            <Route index path='professional-clearance' element={<ProfessionalClearance />}></Route>
            <Route index path='team-declaration' element={<TeamDeclaration />}></Route>
            <Route index path='independence-declaration' element={<IndependenceDeclaration />}></Route>
            <Route index path='form23b' element={<Form23B />}></Route>
            <Route index path='bank-confirmation' element={<BankConfirmation />}></Route>
          </Route>

          <Route path='financialStatements' element={<FinancialStatements />}>          
            <Route index path='report' element={<Report />}></Route>
            <Route index path='sfp' element={<Sfp />}></Route>
            <Route index path='pnl' element={<Pnl />}></Route>
            <Route index path='sce' element={<Sce />}></Route>
            <Route index path='scf' element={<Scf />}></Route>
            <Route index path='note1-3' element={<Note1To3 />}></Route>
            <Route index path='note4-13' element={<Note4To13 />}></Route>
            <Route index path='ppe' element={<Ppe />}></Route>
            <Route index path='cover' element={<Cover />}></Route>
          </Route>

        <Route path='wPapers' element={<WPapers />}>          
            <Route index path='cashAnalysis' element={<CashAnalysis />}></Route>
            <Route index path='loanAnalysis' element={<LoanAnalysis />}></Route>
            <Route index path='todCash' element={<TodCash />}></Route>
            <Route index path='todCapital' element={<TodCapital />}></Route>
            <Route index path='todPpe' element={<TodPpe />}></Route>
            <Route index path='todBorrowings' element={<TodBorrowings />}></Route>
            <Route index path='todInvestments' element={<TodInvestments />}></Route>
            <Route index path='todRevenue' element={<TodRevenue />}></Route>
            <Route index path='todInventories' element={<TodInventories />}></Route>
            <Route index path='todExp' element={<TodExp />}></Route>
            <Route index path='todTax' element={<TodTax />}></Route>
            <Route index path='movementAnalysis' element={<MovementAnalysis />}></Route>
            <Route index path='substantiveCash' element={<SubstantiveCash />}></Route>
            <Route index path='substantiveRevenue' element={<SubstantiveRevenue />}></Route>
            <Route index path='substantivePpe' element={<SubstantivePpe />}></Route>
            <Route index path='substantiveInventories' element={<SubstantiveInventories />}></Route>
            <Route index path='substantiveBorrowings' element={<SubstantiveBorrowings />}></Route>
          </Route>

      </Routes>
      <Footer />
      {/* </Navbar> */}
    </div>
  );
}

export default App;
