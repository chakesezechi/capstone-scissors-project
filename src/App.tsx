import './App.css';

import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import GetInTouch from './pages/GetInTouch';
import DynamicPage from './pages/DynamicPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contact' element={<GetInTouch />} />
      <Route path="/:id" element={<DynamicPage />} />
    </Routes>
  );
}

export default App;