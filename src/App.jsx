import AuthContext from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import SubscriptionPage from "./pages/Subscription";
import PaymentPage from "./pages/Payment";
import HomePage from "./pages/Home";

export default function App() {
  const userOnLocalStorage = localStorage.getItem("userDate")
  const [userDate, setToken] = useState(JSON.parse(userOnLocalStorage))

  const planOnLocalStorage = localStorage.getItem("planDate")
  const [planDate, setPlan] = useState(JSON.parse(planOnLocalStorage))

  function setAndPersistUser(user) {
    setToken(user)
    localStorage.setItem("userDate", JSON.stringify(user))
  }

  function setAndPersistPlan(plan) {
    setPlan(plan)
    localStorage.setItem("planDate", JSON.stringify(plan))
  }

  return (
    <AuthContext.Provider value={{ userDate, planDate, setAndPersistUser, setAndPersistPlan }}>
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