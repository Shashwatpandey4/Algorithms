import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            width: "20vw",
            minHeight: "100vh",  // Ensures full height even when scrolling
            background: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "1rem",
            boxSizing: "border-box",
            position: "fixed", // Fixes navbar position so it doesn't scroll
            top: 0,
            left: 0
        }}>
            <h2 style={{ color: "white", marginBottom: "1rem" }}>Algorithms</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "1rem" }}>
                    <Link to="/dijkstra" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem" }}>
                        Dijkstra's Algorithm
                    </Link>
                </li>
                <li style={{ marginBottom: "1rem" }}>
                    <Link to="/bfs" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem" }}>
                        BFS
                    </Link>
                </li>
                <li style={{ marginBottom: "1rem" }}>
                    <Link to="/dfs" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem" }}>
                        DFS
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
