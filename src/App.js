import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddServices from "./components/Dashboard/AddServices/AddServices";
import Login from "./components/Login/Login";
import Review from './components/Dashboard/Review/Review'
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Dashboard/ManageServices/ManageServices";
import PrivateRoute from "./components/Login/PrivateRoute";
import Payment from "./components/Dashboard/Payment/Payment";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Services from "./components/Home/Services/Services";
import BookingList from "./components/Dashboard/BookingList/BookingList";



export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(sessionStorage.getItem('user')) || [])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute exact path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/addService'>
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/orderList'>
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/review'>
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/manageServices'>
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/bookingList'>
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path='/payment/:serviceId'>
            <Payment></Payment>
          </PrivateRoute>



        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
