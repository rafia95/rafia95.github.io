import React from "react";
export default function App() {
  const hue = 0;
  const outerRadius = 20;
  const numPoints = 5;

  const innerRadius = 15; // Inner radius

  // third party
  let points: string[] = []; // Explicitly define the type of the 'points' array as an array of strings
  for (let i = 0; i < numPoints * 2; i++) {
    let angle = (i * 360) / numPoints;
    let radius = i % 2 === 0 ? outerRadius : innerRadius;
    let x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    let y = 50 + radius * Math.sin((angle * Math.PI) / 180);
    points.push(`${x},${y}`);
  }

  return (
    <div id="starView">
      <svg viewBox="0 0 100 100">
        <polygon points={points.join(" ")} fill={`hsl(${hue}, 80%, 50%)`} />
      </svg>
    </div>
  );
}
