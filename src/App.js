import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import FindKey from "./components/FindKey";

function App() {
  return (
    <div id="masterContainer" className="bg-gray-800">
      <Header />
      <Intro />
      <FindKey />
    </div>
  );
}

export default App;
