import logo from './logo.svg';
import './App.css';

// component:
import NavBar from './component/NavBar';
import Hospitalview from './component/Hospitalview';
import AllPatients from './component/AllPatients';
import AddPatient from './component/AddPatient';
import EditPatient from './component/EditPatient';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <NavBar/>
          <Routes>
        <Route path='/' element={<Hospitalview />} />
        <Route path='/all' element={<AllPatients />} />
        <Route path='/add' element={<AddPatient />} />
        <Route path='/edit/:id' element={<EditPatient />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
