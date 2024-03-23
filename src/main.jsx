  
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout.jsx';
import Home from './components/Home';
import About from './components/About';
import Internships from './components/Internships';
import Contact from './components/Contact';

const NotFound = () => <div>Not found</div>; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="internships" element={<Internships />} />
        <Route path="contact" element={<Contact />} />
        <Route path="lms" element={<Home />} />
        <Route path="portal" element={<Home />} />
        <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);
