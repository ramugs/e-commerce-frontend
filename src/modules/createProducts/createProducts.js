import { useState } from "react";

export default function App() {
  const data = [
    { name: "ramu" },
    { name: "ramu" },
    { name: "venki" },
    { name: "venki" },
    { name: "venki" },
    { name: "krishna" },
    { name: "krishna" },
    { name: "krishna" },
    { name: "krishna" },
    { name: "krishna" },
  ];


  const counts = data.reduce((acc, { name }) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  console.log(counts);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(counts).map(([name, count], index) => (
            <tr key={index} style={{ background: rowColor(count) }}>
              <td>{name}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function rowColor(count) {
  if (count >= 0 && count <= 2) {
    return "red";
  } else if (count > 2 && count <= 4) {
    return "green";
  } else if (count > 4 && count <= 6) {
    return "black";
  } else {
    return "white";
  }
}
