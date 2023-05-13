import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Blog/NavBar';
import PageNotFound from './components/PageNotFound';
import Home from './pages/Home';
import Blog from './pages/Blog';
import WeAreWorking from './components/common/WeAreWorking';
import Footer from './components/Footer';
import AboutMe from './pages/About me';
import MyWork from './pages/MyWork';
import ScrollButton from './hooks/scrollButton';
import VisitAccount from './components/VisitAccount';
import MyWorks from './pages/MyWorks';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='container'>
      <HashRouter>
          <NavBar />
          <Routes>
            <Route path='' element={<App />} />
            <Route index element={<Home />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/:id' element={<Blog />} />
            <Route path='about-me/*' element={<AboutMe />} />
            <Route path='my-works/*' element={<MyWorks/>} />
            <Route path='my-works/:id' element={<MyWork />} />
            <Route path='contact' element={<Contact />} />
            <Route path='working/*' element={<WeAreWorking />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
          <ScrollButton/>
          <VisitAccount/>
      </HashRouter>
    </div>
  );
}

export default App;

