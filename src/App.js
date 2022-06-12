import "./App.css";
import HomePage from "./pages/HomePage";
import { GlobalProvider } from "./context/GlobalState";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <div className="app-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
            </Routes>
          </div>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
