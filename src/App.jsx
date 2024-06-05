import React, { useState } from 'react';
import Board from "./components/Board";
import Navbar from "./components/Navbar";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Board category={category} />
    </div>
  );
}

export default App;
