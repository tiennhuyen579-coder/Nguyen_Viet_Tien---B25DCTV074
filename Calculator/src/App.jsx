import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import "./App.css";

// "" = ô trống
const KEYS = [
  "Clear", "Delete", "", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "", "0", "=", "",
];

export default function App() {
  const [expression, setExpression] = useState("");

  function handleClick(key) {
    if (key === "Clear") {
      setExpression("");
    } else if (key === "Delete") {
      setExpression(expression.slice(0, -1));
    } else if (key === "=") {
      try {
        const result = Function(`"use strict"; return (${expression})`)();
        setExpression(String(result));
      } catch {
        setExpression("Lỗi");
      }
    } else {
      setExpression(expression + key);
    }
  }

  return (
    <div className="calculator">
      <Display value={expression} />
      <div className="keys">
        {KEYS.map((key, index) =>
          key === "" ? (
            <div key={index} />
          ) : (
            <Button key={index} label={key} onClick={() => handleClick(key)} />
          )
        )}
      </div>
    </div>
  );
}