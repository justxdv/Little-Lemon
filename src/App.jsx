import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./contexts/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App min-h-screen bg-[#f5f5f5] flex flex-col justify-between">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
