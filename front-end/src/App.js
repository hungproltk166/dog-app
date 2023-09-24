import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import DogsPage from './components/Dogs/DogsPage';
import CartPage from './components/Cart/CartPage';
import Navbar from './components/Navbar/Navbar';
import axios from "axios"
import { CartContext } from './Contexts/CartContext';
import { useEffect, useState } from 'react';
function App() {
  const [allDog, setAllDog] = useState([])
  const [myCart, addToCart] = useState([{}])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs")
      return res;
    }
    getData().then((res) => setAllDog(res.data))
    getData().catch((err) => console.log("ERROR:", err))
  }, [])
  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      <Router>
        <Navbar />
        <div className='page-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<DogsPage allDog={allDog} />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
