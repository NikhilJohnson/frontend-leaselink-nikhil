import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Verfication from "./pages/Verfication";
import AdminDashboard from "./pages/AdminDashboard";
import Rental from "./pages/Rental";
import BookingPayment from "./pages/BookingPayment";
import Ratings from "./pages/Ratings";
import Message from "./pages/Message";
import Insurance from "./pages/Insurance";
import Navbar from "./compoments/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
     <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/verification" element={<Verfication/>} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
        <Route path="/rental" element={<Rental/>} />
        <Route path="/booking-payment" element={<BookingPayment/>} />
        <Route path="/ratings" element={<Ratings/>} />
        <Route path="/messaging" element={<Message/>} />
        <Route path="/insurance" element={<Insurance/>} />
      </Routes>
      <Footer/>
    
      </div>
  );
}

export default App;
