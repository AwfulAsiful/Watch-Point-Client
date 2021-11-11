import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import AllProducts from './Components/AllProducts/AllProducts';
import AuthProvider from './Context/AuthProvider'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyOrders from './Components/MyOrders/MyOrders';
import Reviews from './Components/Reviews/Reviews';
import Pay from './Components/Pay/Pay';
import AddReview from './Components/AddReview/AddReview';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import AddProduct from './Components/AddProduct/AddProduct';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore'>
            <AllProducts></AllProducts>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/allProducts/:id'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path='/orders/:email'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path='/reviews'>
            <Reviews></Reviews>
          </PrivateRoute>
          <PrivateRoute path='/pay'>
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path='/addReview'>
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path='/manageAllOrders'>
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path='/addProduct'>
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path='/manageProduct'>
              <ManageProducts></ManageProducts>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
        </Switch>
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;


