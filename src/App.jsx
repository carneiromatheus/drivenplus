import AuthContext from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import SubscriptionPage from "./pages/Subscription";
import PaymentPage from "./pages/Payment";
import HomePage from "./pages/Home";

export default function App() {
  const tokenOnLocalStorage = localStorage.getItem("token")
  const [token, setToken] = useState(tokenOnLocalStorage)

  function setAndPersistToken(token) {
    setToken(token)
    localStorage.setItem("token", token)
  }

  return (
    <AuthContext.Provider value={{ token, setAndPersistToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/subscriptions" element={<SubscriptionPage />} />
          <Route path="/subscriptions/:idPlan" element={<PaymentPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}