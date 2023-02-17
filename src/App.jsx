import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { AYAB } from "./AYAB";
import { Footer } from "./Footer";
import { Painting } from "./Painting";
import { Unity } from "./Unity";
import { Website } from "./Website";
Website;

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
          <Route path="/website" element={<Website />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
