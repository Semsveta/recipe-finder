import "./App.css";
import HomePage from "./pages/HomePage";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="app-container">
          <HomePage />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
