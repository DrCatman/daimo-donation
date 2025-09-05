import { useState } from "react";
import { Donate } from "./components/Donate";
import { daimo } from "./config";

export function App() {
  const [completed, setCompleted] = useState(false);
  return (
    <main>
      <img src="/logo.svg" alt="Acme Foundation" width={64} height={64} />
      <h1>Acme Foundation</h1>
      <p>
        {completed
          ? "Thank you!"
          : "Now accepting donations in stablecoins and crypto."}{" "}
        <a href={daimo.returnUrl}>Return to Acme Foundation</a>
      </p>
      {!completed && <Donate onSuccess={() => setCompleted(true)} />}
    </main>
  );
}
