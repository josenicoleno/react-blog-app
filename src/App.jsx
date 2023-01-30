import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
/* import Footer from './components/Footer';*/
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

