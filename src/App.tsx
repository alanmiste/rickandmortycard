import React from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";


function App() {
  return (
    <div className="App">
      <div className="App-header">
          <h1>Rick and Morty App</h1>
          <CharacterGallery />
      </div>
    </div>
  );
}

export default App;
