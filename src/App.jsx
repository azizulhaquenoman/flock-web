
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// Layouts
import AuthLayout from './layouts/AuthLayout.jsx';

// Components
import Login from './Pages/auth/Login.jsx';
import Signup from './Pages/auth/Signup.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App