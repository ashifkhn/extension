
import './App.css';
import { useEffect, useState } from 'react';
import { LandingPage } from "../src/components/pages/LandingPage/LandingPage.jsx"
import { HomePage } from './components/pages/HomePage/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [existingUser, setExistingUser] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem('name');
    setExistingUser(user);
  }, [existingUser]);

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
