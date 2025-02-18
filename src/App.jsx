import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dijkstra from "./pages/Dijkstra";
import BFS from "./pages/BFS";
import DFS from "./pages/DFS";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", width: "100vw" }}>
        {/* Fixed Sidebar (20%) */}
        <Navbar />

        {/* Scrollable Main Content (80%) */}
        <div style={{
          width: "80vw",
          minHeight: "100vh", // Makes sure it stretches with content
          marginLeft: "20vw", // Offsets for the fixed navbar
          padding: "2rem",
          background: "#1e1e1e",
          color: "white",
          overflowY: "auto",
        }}>
          <Routes>
            <Route path="/dijkstra" element={<Dijkstra />} />
            <Route path="/bfs" element={<BFS />} />
            <Route path="/dfs" element={<DFS />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
