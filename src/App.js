
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Compunent/Navbar'
import Home from './Pages/Home';
import Gellary from './Pages/Gellary';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Clock from './Pages/Clock';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import RequireAuth from './RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Pages/Modal';
import OrderBox from './Pages/OrderBox';
import AllProduct from './Pages/AllProduct';
import DiscountProduct from './Pages/DiscountProduct';
function App() {

  return (
    <div className="">
   <Navbar />
  

 <div className='mt-16'>
 <Routes>
   <Route path='/' element={<Home />}></Route>
   <Route path='/home' element={<Home />}></Route>
   <Route path='/product' element={<Product />}></Route>
   <Route path='/clock' element={<Clock />}></Route>
    <Route path='/gellary' element={<Gellary />}></Route>
    <Route path='/order' element={<RequireAuth>
      <Order ></Order>
    </RequireAuth>}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/signIn' element={<SignIn />}></Route>
    <Route path='/modal' element={<Modal />}></Route>
    <Route path='/orderBox' element={<OrderBox />}></Route>
    <Route path='/allProduct' element={<AllProduct />}></Route>
    <Route path='/discountPd' element={<DiscountProduct />}></Route>
   </Routes>
   <ToastContainer />

 </div>

    </div>
  );
}

export default App;
