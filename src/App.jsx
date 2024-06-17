import HeaderMain from "./layouts/HeaderMain"
import Cards from "./pages/Cards"
import Accounts from "./pages/Accounts"
import Loans from "./pages/Loans"
import ApplyLoan from "./pages/ApplyLoan"
import ApplyCard from "./pages/ApplyCard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import { useState } from 'react'

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [headerOpen, setHeaderOpen] = useState(false);

  const toggleLoginOrRegister = () => {
    setShowLogin(!showLogin);
  };

  const setLoginOrRegister = (value) => {
    setShowLogin(value);
  };

  const toggleHeader = () => {
    setHeaderOpen(!headerOpen);
  };

  return (
    <BrowserRouter>
      <HeaderMain setLoginOrRegister={setLoginOrRegister} headerOpen={headerOpen} toggleHeader={toggleHeader} showLogin={showLogin} toggleLoginOrRegister={toggleLoginOrRegister}>
        <Routes>
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/apply-loan" element={<ApplyLoan />} />
          <Route path="/apply-card" element={<ApplyCard />} />
          <Route
            path="/"
            element={<LandingPage headerOpen={headerOpen} toggleHeader={toggleHeader} setLoginOrRegister={setLoginOrRegister} />}
          />
        </Routes>
      </HeaderMain>
    </BrowserRouter>
  )
}

export default App
