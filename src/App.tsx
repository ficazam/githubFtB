import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { User } from './pages/User';
import { NotFound } from "./pages/NotFound";

import { NavBar } from "./components/Layout/NavBar";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between align-center h-screen">
      <NavBar />
      <main className="container mx-auto-px-3 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='user/:login' element={<User />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
