import HeaderMain from "./layouts/HeaderMain"
import Cards from "./pages/Cards"
import Accounts from "./pages/Accounts"
import Loans from "./pages/Loans"
import ApplyLoan from "./pages/ApplyLoan"
import ApplyCard from "./pages/ApplyCard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import { useState } from 'react'
import PrivateRouteHOC from "./HOCs/PrivateRouteHOC"
import PublicRoute from "./components/PublicRoute"
import ApplyTransaction from "./pages/ApplyTransaction"
import AccountDetails from "./pages/AccountDetails"


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
        <Route path="/accounts" element={<PrivateRouteHOC><Accounts /></PrivateRouteHOC>} />
          <Route path="/cards" element={<PrivateRouteHOC><Cards /></PrivateRouteHOC>} />
          <Route path="/loans" element={<PrivateRouteHOC><Loans /></PrivateRouteHOC>} />
          <Route path="/apply-loan" element={<PrivateRouteHOC><ApplyLoan /></PrivateRouteHOC>} />
          <Route path="/apply-card" element={<PrivateRouteHOC><ApplyCard /></PrivateRouteHOC>} />
          <Route path="/apply-transaction" element={<PrivateRouteHOC><ApplyTransaction /></PrivateRouteHOC>} />
          <Route path="/transactions" element={<PrivateRouteHOC><ApplyTransaction /></PrivateRouteHOC>} />
          <Route path="/account-details/:id" element={<PrivateRouteHOC><AccountDetails /></PrivateRouteHOC>} />
          <Route
            path="/"
            element={
              <PublicRoute>
                <LandingPage headerOpen={headerOpen} toggleHeader={toggleHeader} setLoginOrRegister={setLoginOrRegister} />
              </PublicRoute>
            } />
        </Routes>
      </HeaderMain>
    </BrowserRouter>
  )
}

export default App
