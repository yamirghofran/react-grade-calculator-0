import './App.css';
import Navbar from '../Navbar/Navbar';
import FinalGradeForm from '../FinalGradeForm/FinalGradeForm';
import Main from '../Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Redirect0 from './Redirect0';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Redirect0 />} />
        <Route path='/:calculatorType' element={<Main />} />
      </Routes>
      
    </Router>
    
    
  );
}

export default App;
