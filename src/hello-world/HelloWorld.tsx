import React from "react";
import { useState } from "react";

export default function HelloWorld({
  name,
}: {
  name: string;
}): React.JSX.Element {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>
        Hello {name} x{count}!
      </h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
