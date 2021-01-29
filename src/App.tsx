import React from "react";
import data from "./discovery_page.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      {data.sections.map((section, idx) => (
        <Section section={section} key={`section-${idx}`} />
      ))}
    </div>
  );
}

export default App;
