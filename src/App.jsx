// import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

/* const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Chip",
      breed: "Alabai",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      name: "Pepper",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Sirko",
      breed: "Mixed",
    }),
  ]);
}; */

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
