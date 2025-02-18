import React from "react";

function GraphVisualization({ graphData, visitedNodes }) {
    return (
        <svg width="900" height="500" style={{ border: "1px solid white" }}>
            {/* Render edges */}
            {graphData.edges.map((edge, index) => {
                const fromNode = graphData.nodes.find(node => node.id === edge.from);
                const toNode = graphData.nodes.find(node => node.id === edge.to);

                if (!fromNode || !toNode) return null; // Prevent crash

                return (
                    <line
                        key={index}
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke="white"
                        strokeWidth="2"
                    />
                );
            })}

            {/* Render nodes */}
            {graphData.nodes.map(node => (
                <g key={node.id}>
                    <circle
                        cx={node.x}
                        cy={node.y}
                        r="20"
                        fill={visitedNodes[node.id] !== undefined ? "green" : "white"}
                        stroke="black"
                        strokeWidth="2"
                    />
                    <text
                        x={node.x - 5}
                        y={node.y + 5}
                        fill="black"
                        fontWeight="bold"
                        fontSize="14px"
                    >
                        {node.label}
                    </text>
                </g>
            ))}
        </svg>
    );
}

export default GraphVisualization;
