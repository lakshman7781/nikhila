import React, { useState } from "react";

function Greeting({ name, age }) {
  return (
    <div>
      <h2>Hello, {name}! You are {age} years old.</h2>
    </div>
  );
}


function App() {
  const [name, setName] = useState("User");
  const [age, setAge] = useState(20);

  const handleUpdateInfo = () => {
    setName("Aswini");
    setAge(age + 1);
  };

  return (
    <div>
      <h1>Props & State Example</h1>
      <Greeting name={name} age={age} />
      <button onClick={handleUpdateInfo}>Update Info</button>
    </div>
  );
}

export default App;
