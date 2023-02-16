import { Header } from "./Header";
import { Home } from "./Home";
import { AYAB } from "./AYAB";
import { Footer } from "./Footer";
import { Painting } from "./Painting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Unity } from "./Unity";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ayab" element={<AYAB />} />
          <Route path="/paintings" element={<Painting />} />
          <Route path="/unity" element={<Unity />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
