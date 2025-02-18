import { useState } from "react";
import GraphVisualization from "../components/GraphVisualization";

function Dijkstra() {
    // Define the graph based on the provided image
    const initialGraph = {
        nodes: [
            { id: "1", label: "A", x: 100, y: 200 },
            { id: "2", label: "2", x: 200, y: 400 },
            { id: "3", label: "3", x: 300, y: 200 },
            { id: "4", label: "4", x: 500, y: 300 },
            { id: "5", label: "B", x: 600, y: 100 },
            { id: "6", label: "6", x: 400, y: 100 },
        ],
        edges: [
            { from: "1", to: "2", weight: 7 },
            { from: "1", to: "3", weight: 9 },
            { from: "1", to: "6", weight: 14 },
            { from: "2", to: "3", weight: 10 },
            { from: "2", to: "4", weight: 15 },
            { from: "3", to: "4", weight: 11 },
            { from: "3", to: "6", weight: 2 },
            { from: "4", to: "5", weight: 6 },
            { from: "5", to: "6", weight: 9 },
        ],
    };

    const [graphData, setGraphData] = useState(initialGraph);
    const [visitedNodes, setVisitedNodes] = useState({});
    const [stepIndex, setStepIndex] = useState(0);
    const [steps, setSteps] = useState([]);

    function dijkstra(graph, startNode) {
        let distances = {};
        let visited = new Set();
        let priorityQueue = [{ node: startNode, distance: 0 }];
        let stepLog = [];

        // Initialize distances
        graph.nodes.forEach(node => {
            distances[node.id] = node.id === startNode ? 0 : Infinity;
        });

        while (priorityQueue.length > 0) {
            // Sort priority queue
            priorityQueue.sort((a, b) => a.distance - b.distance);
            let { node } = priorityQueue.shift();

            if (visited.has(node)) continue;
            visited.add(node);

            // Log this step
            stepLog.push({
                node,
                distance: distances[node],
                visitedNodes: new Set([...visited]),
                queue: [...priorityQueue.map(n => n.node)]
            });

            // Update distances
            graph.edges.forEach(edge => {
                if (edge.from === node && !visited.has(edge.to)) {
                    let newDist = distances[node] + edge.weight;
                    if (newDist < distances[edge.to]) {
                        distances[edge.to] = newDist;
                        priorityQueue.push({ node: edge.to, distance: newDist });
                    }
                }
            });
        }

        return stepLog;
    }

    function playAtOnce() {
        const steps = dijkstra(graphData, "1");
        setVisitedNodes(steps[steps.length - 1]?.visitedNodes || {});
        setSteps(steps);
        setStepIndex(steps.length);
    }

    function playNextStep() {
        if (stepIndex < steps.length) {
            setVisitedNodes(steps[stepIndex].visitedNodes);
            setStepIndex(stepIndex + 1);
        }
    }

    function reset() {
        setVisitedNodes({});
        setStepIndex(0);
        setSteps([]);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100%", overflowY: "auto" }}>
            {/* Graph + Table Section */}
            <div style={{ display: "flex", height: "60vh" }}>
                {/* Graph Visualization (80%) */}
                <div style={{ width: "80%", background: "#333", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <GraphVisualization graphData={graphData} visitedNodes={visitedNodes} />
                </div>

                {/* Visited Nodes Table (20%) */}
                <div style={{ width: "20%", background: "#222", padding: "1rem", color: "white" }}>
                    <h3>Step-by-Step Execution</h3>
                    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                        <thead>
                            <tr>
                                <th>Node</th>
                                <th>Distance</th>
                                <th>Queue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stepIndex > 0 && (
                                <tr>
                                    <td>{steps[stepIndex - 1].node}</td>
                                    <td>{steps[stepIndex - 1].distance}</td>
                                    <td>{steps[stepIndex - 1].queue.join(", ")}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Buttons */}
            <div style={{ padding: "1rem", textAlign: "center", background: "#1e1e1e" }}>
                <button onClick={playAtOnce} style={{ margin: "10px", padding: "10px", cursor: "pointer" }}>Play at Once</button>
                <button onClick={playNextStep} style={{ margin: "10px", padding: "10px", cursor: "pointer" }}>Play Next Step</button>
                <button onClick={reset} style={{ margin: "10px", padding: "10px", cursor: "pointer" }}>Reset</button>
            </div>
        </div>
    );
}

export default Dijkstra;
