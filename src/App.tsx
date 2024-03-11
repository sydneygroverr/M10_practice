import React, { useState } from 'react';
import './App.css';

function Welcome() {
  return <h1>This site calculates the amount of Go his wife has when he is dawdling</h1>;
}

function GoButton() {
  // function that increments the number of the page when the button in pressed
  const incrementGo = () => updateLevel(levelOfGo * 2);

  return (
    <div>
      <button onClick={incrementGo}>GO!!!!</button>
    </div>
  );
}

function GoLevel() {
  return <label>Amount of Go: {levelOfGo}</label>;
}

function App() {
  // state variable and statesetter function
  const [levelOfGo, updateLevel] = useState(1);

  return (
    <div className="App">
      <Welcome />
      <br />
      <br />
      <GoButton />
    </div>
  );
}

export default App;
