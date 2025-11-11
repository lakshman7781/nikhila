import React, { useState } from "react";


function EventDemo() {
  const [message, setMessage] = useState("clickbutton");

  const handleClick = () => setMessage("Button clicked");
  
  const handleMouseover = () => setMessage("Mouse Hovered");
  
  const handleInputChange = (e) => setMessage("Typed: " + e.target.value);

  return (
    <div>
      <h2>{message}</h2>
      
      <button onClick={handleClick}>Click Me</button>
      <button onMouseOver={handleMouseover}>Hover Me</button>
      
      <input
        type="text"
        placeholder="type here"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default EventDemo;
