import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Parking from "./pages/Parking";
import Booking from "./pages/Booking";
import OTP from "./pages/OTP";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Bookings from "./pages/Bookings";

function App() {
  const path = window.location.pathname;

  if (path === "/login") {
    return <Login />;
  }

  if (path === "/signup") {
    return <Signup />;
  }

  if (path === "/dashboard") {
    return <Dashboard />;
  }

  if (path === "/parking") {
    return <Parking />;
  }

  if (path === "/booking") {
    return <Booking />;
  }
  if (path === "/otp") {
  return <OTP />;
  }
  if (path === "/payment") {
  return <Payment />;
  }
  if (path === "/confirmation") {
  return <Confirmation />;
  }
  if (path === "/bookings") {
  return <Bookings />;
  }

  return <Home />;
}

export default App;