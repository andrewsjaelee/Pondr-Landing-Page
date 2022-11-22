// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Product from './pages/Product';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Testing from './pages/Testing';
import Privacy from './components/footerComp/Privacy';
import TOS from './components/footerComp/TOS';
import Career from './components/footerComp/Career';


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/testing' element={<Testing/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/TOS' element={<TOS/>}/>
          <Route path='/careers' element={<Career/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
