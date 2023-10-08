import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Cuisine from "./pages/Cuisine";
import Search from "./pages/search";
import Ingredients from "./pages/Ingredients";
import Result from "./pages/result";
import Footer from "./components/Footer/footer";
import Cuss from "./components/Cuisine/cuisine";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/cuisine/:cuisine" element={<Cuisine />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/cuss" element={<Cuss />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
