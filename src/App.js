import './App.css';
import Quiz from "./Pages/Quiz"
import Details from "./Pages/Details"
import Topics from "./Pages/Topics"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Details />} exact />
          <Route path="/topics"   index element={<Topics />}  />
          <Route path="/quiz"   index element={<Quiz />}  />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
