import  Home  from "./pags/Home";
import  Login  from "./pags/Login";
import  Register  from "./pags/Register";
import "./style.scss";
import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import { useUserAuth } from "./context/AuthContext";
import ForgotPasswordPage from "./pags/ForgotpasswordPage";
import Addcomplaint from "./pags/Addcomplaint";
function App() {
  const { currentUser } = useUserAuth();
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return (
    <BrowserRouter>
      <Routes>
      <Route path = "/">
        <Route index element={
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>}/>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="addcomplaint" element={<Addcomplaint />} />
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
