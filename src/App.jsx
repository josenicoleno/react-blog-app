import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import Home from './pages/Home';
import Blog from './pages/Blog';
import WeAreWorking from './components/common/WeAreWorking';
import Footer from './components/Footer';
import AboutMe from './pages/About me';
import MyWork from './pages/MyWork';
import ScrollButton from './hooks/scrollButton';
import VisitAccount from './components/VisitAccount';

function App() {
  return (
    <div className='container'>
      <HashRouter>
          <NavBar />
          <Routes>
            <Route path='' element={<App />} />
            <Route index element={<Home />} />
            <Route path='blog/:id' element={<Blog />} />
            <Route path='sobre-mi/*' element={<AboutMe />} />
            <Route path='work/:id' element={<MyWork />} />
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

