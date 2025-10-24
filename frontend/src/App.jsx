import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import ProtectedRoute from './components/ProtectedRoute'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vvw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <Searchbar />
       <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />}/>
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/login' element={<Login />} />

        {/* Protected Routes */}
        <Route path='/cart' element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }/>
        <Route path='/place-order' element={
          <ProtectedRoute>
            <PlaceOrder />
          </ProtectedRoute>
        }/>
        <Route path='/orders' element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }/>
       </Routes>
       <Footer />
    </div>
  )
}

export default App
