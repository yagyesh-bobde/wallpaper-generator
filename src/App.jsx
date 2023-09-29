

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import WalGenerator from './pages/WalGenerator'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Header from './components/Header/Header'
import QuoteGenerator from './pages/QuoteGenerator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <BrowserRouter>
      <div className="px-10">
        <Header />
        <ToastContainer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
        <Route path="/wallpaper-generator" element={<WalGenerator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App