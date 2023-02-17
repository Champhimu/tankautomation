import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import LogReg from "./components/pages/AuthAdmin/LogReg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="/logreg" element={<LogReg />} />
          </Route>
          <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !! SORRY</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
