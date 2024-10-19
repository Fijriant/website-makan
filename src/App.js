import './App.css';
import Navbar from './components/Navbar'; 
import { Route, Routes } from 'react-router-dom'; 
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Products />} />
        <Route exact path="/products/:id" component={Product} /> 
        <Route path="/about/" element={<About />} />
        
      </Routes>
    </>
  );
}

export default App;
