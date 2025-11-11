/**
 * Standalone Event Demo - Exactly as per Assignment Requirements
 * This file demonstrates the exact implementation requested in the assignment
 */

// Import React and useState from "react"
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./EventDemo.css";

/**
 * EventDemo Function Component
 * Demonstrates onClick, onMouseOver, and onChange event handlers
 */
function EventDemo() {
  // State: Initialize message
  const [message, setMessage] = useState("clickbutton");

  // Event Handlers
  const handleClick = () => setMessage("Button clicked");
  
  const handleMouseover = () => setMessage("Mouse Hovered");
  
  const handleInputChange = (e) => setMessage("Typed: " + e.target.value);

  // Return JSX
  return (
    <div className="event-demo-container">
      <h2 className="message">{message}</h2>
      
      <div className="button-container">
        <button className="event-button click-btn" onClick={handleClick}>
          Click Me
        </button>
        
        <button className="event-button hover-btn" onMouseOver={handleMouseover}>
          Hover Me
        </button>
      </div>
      
      <input
        type="text"
        placeholder="type here"
        onChange={handleInputChange}
        className="event-input"
      />
    </div>
  );
}

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EventDemo />);

/**
 * OUTPUT SEQUENCE DEMONSTRATION:
 * 
 * 1. Initial state: "clickbutton"
 * 2. Click "Click Me" button → "Button clicked"
 * 3. Hover over "Hover Me" button → "Mouse Hovered"
 * 4. Type in input field (e.g., "Hello") → "Typed: Hello"
 * 
 * EVENTS DEMONSTRATED:
 * - onClick: Triggered when "Click Me" button is clicked
 * - onMouseOver: Triggered when mouse hovers over "Hover Me" button
 * - onChange: Triggered when user types in the input field
 */
