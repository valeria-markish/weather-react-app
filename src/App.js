import "./App.css";
import Footer from "./footer";
import Header from "./header";
import Current from "./current";
import Forecast from "./forecast";

function App() {
  return (
    <div className="App container">
      <div className="border border-dark box">
        <Header />
        <Current />
        <hr />
        <Forecast />
        <hr />
      </div>
      <Footer />
    </div>
  );
}

export default App;
