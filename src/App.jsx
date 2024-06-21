import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import SamagriListForm from "./pages/SamagriLitsForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-puja-samagri" element={<SamagriListForm />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
