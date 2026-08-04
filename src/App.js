import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <Header />
          <Nav />
        </div>
      </header>

      <Main />

      <Footer />
    </div>
  );
}

export default App;