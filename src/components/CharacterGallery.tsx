import React, {useEffect, useState} from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"
import SearchBar from "./SearchBar";
import {Character} from "./Character"
import axios from "axios";

type CharacterGalleryProps = {
    characters: Character[]
}


export default function CharacterGallery(){

    const [characters, setCharacter] = useState<Character[]>([])

    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {return response.data})
            .then((data) => {setCharacter(data.results)})
            .catch((error) => {console.error(error)})
    },[])



    const [searchText, setSearchText] = useState<string>("")
    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase()))

    return(
        <div>
            <p>
            Search:
            </p>
            <SearchBar setSearchText={setSearchText}/>
            <div className={"characterGallery"}>
            {filteredCharacters.length === 0 && <p>Sorry, there are no characters to display!!</p> }
            {filteredCharacters.map((character) => <CharacterCard character={character} key={character.id}/>)}
            </div>
        </div>
    )
}
