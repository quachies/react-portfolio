import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="main-area">
      <div className="navbar-container">
        <Header />
      </div>
      <Outlet />
      <div className="footer-container">
        <Footer />
      </div>
    </main>
  );
}

export default App;
