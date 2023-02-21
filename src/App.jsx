import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
// import AboutMe from './components/About me';
import WeAreWorking from './components/common/WeAreWorking';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/sobre-mi/' element={<WeAreWorking />} />
          {/* <Route path='/sobre-mi/' element={<AboutMe />} /> */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        { <Footer /> }
      </BrowserRouter>
    </div>
  );
}

export default App;

