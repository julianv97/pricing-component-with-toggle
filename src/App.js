import React, { useState } from "react";
import data from "./data";

import CardsList from "./components/CardsList";
import SwitchButton from "./components/SwitchButton";

function App() {
  const [showMonthly, setShowMonthly] = useState(true);

  return (
    <React.Fragment>
      <main
        style={{
          backgroundImage: "url('images/bg-top.svg')",
          backgroundSize: "cover",
        }}
        className="w-full flex h-full min-h-screen bg-very-light-grayish-blue  flex-col justify-center items-center font-montserrat"
      >
        <h1 className="capitalize text-4xl pb-6 pt-12 text-grayish-blue font-bold">
          our pricing
        </h1>
        <SwitchButton
          showMonthly={showMonthly}
          setShowMonthly={setShowMonthly}
        />
        <CardsList data={data} showMonthly={showMonthly} />
      </main>
    </React.Fragment>
  );
}

export default App;
