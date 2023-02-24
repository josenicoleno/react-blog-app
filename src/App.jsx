import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutMe from './components/About me';
import WeAreWorking from './components/common/WeAreWorking';
/* import Footer from './components/Footer'; */

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/sobre-mi/*' element={<AboutMe />} />
          <Route path='/working/*' element={<WeAreWorking />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
         {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

