import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderMain from "./layouts/HeaderMain";
import LandingPage from "./pages/LandingPage";
import PublicRoute from "./components/PublicRoute";
import PrivateRouteHOC from "./HOCs/PrivateRouteHOC";

import Accounts from "./pages/Accounts";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import ApplyLoan from "./pages/ApplyLoan";
import ApplyCard from "./pages/ApplyCard";
import ApplyTransaction from "./pages/ApplyTransaction";
import AccountDetails from "./pages/AccountDetails";

const protectedRoutes = [
  { path: "/accounts", component: Accounts },
  { path: "/cards", component: Cards },
  { path: "/loans", component: Loans },
  { path: "/apply-loan", component: ApplyLoan },
  { path: "/apply-card", component: ApplyCard },
  { path: "/apply-transaction", component: ApplyTransaction },
  { path: "/transactions", component: ApplyTransaction },
  { path: "/account-details/:id", component: AccountDetails }
];

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
          {protectedRoutes.map(({ path, component: Component }) => {
            const WrappedComponent = PrivateRouteHOC(Component);
            return <Route key={path} path={path} element={<WrappedComponent />} />;
          })}
          <Route
            path="/"
            element={
              <PublicRoute>
                <LandingPage headerOpen={headerOpen} toggleHeader={toggleHeader} setLoginOrRegister={setLoginOrRegister} />
              </PublicRoute>
            } 
          />
        </Routes>
      </HeaderMain>
    </BrowserRouter>
  );
}

export default App;
