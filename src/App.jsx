import HeaderMain from "./layouts/HeaderMain"
import Cards from "./pages/Cards"
import Accounts from "./pages/Accounts"
import Loans from "./pages/Loans"
import ApplyLoan from "./pages/ApplyLoan"
import ApplyCard from "./pages/ApplyCard"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <HeaderMain>
        <Routes>
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/apply-loan" element={<ApplyLoan />} />
          <Route path="/apply-card" element={<ApplyCard />} />
        </Routes>
      </HeaderMain>
    </BrowserRouter>
  )
}

export default App
