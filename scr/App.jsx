import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CreateCertificate from "./pages/CreateCertificate";
import VerifyCertificate from "./pages/VerifyCertificate";
import Blockchain from "./pages/Blockchain";
import Certificates from "./pages/Certificates";
import About from "./pages/About";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCertificate />} />
          <Route path="/verify" element={<VerifyCertificate />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
