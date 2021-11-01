import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Login from './Pages/Authentication/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageAllOrder from './Pages/Order/ManageAllOrder';
import MyOrder from './Pages/Order/MyOrder';
import AddService from './Pages/Services/AddService/AddService';
import AboutUs from './Pages/AboutUs/AboutUs';
import Register from './Pages/Authentication/Register';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/allOrder">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>



    </div>
  );
}

export default App;
