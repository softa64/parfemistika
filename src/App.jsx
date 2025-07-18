import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DizajnPage from './pages/DizajnPage';
import KorpaPage from './pages/KorpaPage';
import PlacanjePage from './pages/PlacanjePage';
import KvizPage from './pages/KvizPage';
import OnamaPage from './pages/OnamaPage';
import KontaktPage from './pages/KontaktPage';
import AuthPage from './pages/AuthPage';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dizajn" element={<DizajnPage />} />
          <Route path="/korpa" element={<KorpaPage />} />
          <Route path="/placanje" element={<PlacanjePage />} />
          <Route path="/kviz" element={<KvizPage />} />
          <Route path="/onama" element={<OnamaPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;