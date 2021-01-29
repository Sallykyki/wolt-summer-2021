import React from "react";
import data from "./discovery_page.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {data.sections.map((section, idx) => (
          <Section section={section} key={idx} />
        ))}
      </header>
    </div>
  );
}

export default App;
