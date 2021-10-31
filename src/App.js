import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import AddTravel from "./Services/AddTravel/AddTravel";
import Booking from "./Services/Booking/Booking";
import Login from "./Services/Login/Login";
import PrivateRoute from "./Services/Login/PrivateRoute/PrivateRoute";
import ManageAllOrders from "./Services/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Services/MyOrders/MyOrders";
import Tours from "./Services/Tours/Tours";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
           <Login></Login>
          </Route>
          <Route exact path="/addTravel">
           <AddTravel></AddTravel>
          </Route>
          <PrivateRoute exact path="/myOrders">
           <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/manageOrders">
           <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute  path="/tours/:id">
           <Booking></Booking>
          </PrivateRoute>
        </Switch>
        <Route path ='/footer'>
          <Footer></Footer>
        </Route>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
