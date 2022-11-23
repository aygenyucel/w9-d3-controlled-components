import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";

function App() {
  return (
    <div className="App">
      <WarningSign />
      <MyBadge />
    </div>
  );
}

export default App;
