import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Painting } from "./Painting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings" element={<Painting />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
