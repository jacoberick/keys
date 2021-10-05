import "./App.css";
import Header from "./components/Header";
import FindKey from "./components/FindKey";

function App() {
  return (
    <div id="masterContainer" className="bg-gray-100 h-screen">
      <Header />
      <FindKey />
    </div>
  );
}

export default App;
