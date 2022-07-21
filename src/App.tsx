import React, {useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
// import {apiData} from "./components/CharacterGallery";
import SearchBar from "./components/SearchBar";

function App() {
    // const [searchText, setSearchText] = useState<string>("")
    // const filteredCharacters = apiData.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <div className="App">
      <div className="App-header">
          <h1>Rick and Morty App</h1>
          {/*<SearchBar setSearchText={setSearchText}/>*/}
          {/*<CharacterGallery characters={filteredCharacters}/>*/}
          <CharacterGallery />
      </div>
    </div>
  );
}

export default App;
