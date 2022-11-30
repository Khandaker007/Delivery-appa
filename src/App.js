import "./App.scss";

// COMPONENTS
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home/home.component";

function App() {
  return (
    <div className="delivery-appa">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
