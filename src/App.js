import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

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