import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import SubscriptionPage from "./pages/Subscription";
import PaymentPage from "./pages/Payment";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/subscriptions" element={<SubscriptionPage />} />
          <Route path="/subscriptions/ID_DO_PLANO" element={<PaymentPage />} />
          <Route path="/home" element={<HomePage />} />                
        </Routes>
      </BrowserRouter>
  )
}