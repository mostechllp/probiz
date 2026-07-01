import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Impact from './pages/Impact';
import Join from './pages/Join';
import Leaders from './pages/Leaders';
import Learning from './pages/Learning';
import Services from './pages/Services';
import WhitePaper from './pages/WhitePaper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="impact" element={<Impact />} />
          <Route path="join" element={<Join />} />
          <Route path="leaders" element={<Leaders />} />
          <Route path="learning" element={<Learning />} />
          <Route path="services" element={<Services />} />
          <Route path="white-paper" element={<WhitePaper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
