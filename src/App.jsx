import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./App.css";
import $ from "jquery";
import BackToTopButton from './components/BackToTopButton';
window.$ = $;
window.jQuery = $;



const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Outlet/>
      <BackToTopButton/>
      <Footer/>
    </div>
  )
}

export default App
