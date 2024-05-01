import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Blog } from "./Pages/Blog";
import { Donate } from "./Pages/Donate";
import { GetInvolved } from "./Pages/GetInvolved";
import { Services } from "./Pages/Services";
import { Team } from "./Pages/Team";
import { OurMission } from "./Pages/OurMission";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
