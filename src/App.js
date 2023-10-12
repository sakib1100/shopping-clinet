
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Compunent/Navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Order from './Pages/Order';

function App() {
  return (
    <div className="">
   <Navbar />
 <div className='mt-16'>
 <Routes>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/about' element={<Home></Home>}></Route>
    <Route path='/order' element={<Order ></Order>}></Route>
   </Routes>
 </div>
    </div>
  );
}

export default App;
