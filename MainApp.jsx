import React, { useState } from "react";
import App from "./App.jsx";
import EventDemo from "./EventDemo.jsx";


function MainApp() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "props-state":
        return <App />;
      case "event-handling":
        return <EventDemo />;
      default:
        return (
          <div>
            <h1>React Assignments</h1>
            <p>Select a demo:</p>
            <button onClick={() => setCurrentPage("props-state")}>Props & State Demo</button>
            <button onClick={() => setCurrentPage("event-handling")}>Event Handling Demo</button>
          </div>
        );
    }
  };

  return (
    <div>
      {currentPage !== "home" && (
        <nav>
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("props-state")}>Props & State</button>
          <button onClick={() => setCurrentPage("event-handling")}>Event Handling</button>
        </nav>
      )}
      
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default MainApp;
