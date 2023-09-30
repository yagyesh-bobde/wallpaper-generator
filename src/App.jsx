


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Dashboard />} />
        <Route path="/dashboard/wallpapers" element={<Dashboard />} />
        <Route path="/dashboard/wallpaper-generator" element={<Dashboard />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/quotes-generator" element={<QuoteGenerator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App