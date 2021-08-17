import React, { useState } from "react";

import SwitchButton from "./components/SwitchButton";

function App() {
  const [showMonthly, setShowMonthly] = useState(false);
  

  return (
    <React.Fragment>
      <main className="w-full flex flex-col justify-center">
        <h1 className="capitalize">our pricing</h1>
        <SwitchButton
          showMonthly={showMonthly}
          setShowMonthly={setShowMonthly}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
