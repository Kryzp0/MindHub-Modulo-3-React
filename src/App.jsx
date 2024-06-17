import HeaderMain from "./layouts/HeaderMain"
import Cards from "./pages/Cards"
import Accounts from "./pages/Accounts"
import Loans from "./pages/Loans"
import ApplyLoan from "./pages/ApplyLoan"
import ApplyCard from "./pages/ApplyCard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import { useState } from 'react'
import PrivateRoute from "./components/PrivateRoute"
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
          <Route path="/accounts" element={
            <PrivateRoute>
              <Accounts />
            </PrivateRoute>
          } />
          <Route path="/cards" element={
            <PrivateRoute>
              <Cards />
            </PrivateRoute>
          } />
          <Route path="/loans" element={
            <PrivateRoute>
              <Loans />
            </PrivateRoute>
          } />
          <Route path="/apply-loan" element={
            <PrivateRoute>
              <ApplyLoan />
            </PrivateRoute>
          } />
          <Route path="/apply-card" element={
            <PrivateRoute>
              <ApplyCard />
            </PrivateRoute>
          } />
          <Route path="/apply-transaction" element={
            <PrivateRoute>
              <ApplyTransaction />
            </PrivateRoute>
          } />
          <Route path="/transactions" element={
            <PrivateRoute>
              <ApplyTransaction />
            </PrivateRoute>
          } />
          <Route path="/account-details/:id" element={
            <PrivateRoute>
              <AccountDetails />
            </PrivateRoute>
          } />
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
