import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import FindKey from "./components/FindKey";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="masterContainer" className="bg-gray-800">
      <Header />
      <Intro />
      <FindKey />
      <Footer />
    </div>
  );
}

export default App;
