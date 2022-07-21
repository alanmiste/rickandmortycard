import React, {useEffect, useState} from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"
import SearchBar from "./SearchBar";
import {Character} from "./Character"
import axios from "axios";

type CharacterGalleryProps = {
    characters: Character[]
}


export default function CharacterGallery() {

    const [characters, setCharacter] = useState<Character[]>([])

    const [pageNumber, setPageNumber] = useState<number>(1)

    const url = "https://rickandmortyapi.com/api/character?page="

    const [pageLink, setPageLink] = useState<string>(url)

    console.log("pageNumber: " + pageNumber)
    console.log("pageLink: " + pageLink)

    useEffect(() => {
        axios.get(pageLink)
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setCharacter(data.results)
            })
            .catch((error) => {
                console.error(error)
            })

        console.log("useEffect done!!")
    }, [pageLink])

    console.log("pageLink: " + pageLink)


    const [searchText, setSearchText] = useState<string>("")
    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <div>
            <p>
                Search:
            </p>
            <SearchBar setSearchText={setSearchText}/>
            <div className={"nextAndPrevious"}>
                <button onClick={()=> {
                    setPageNumber(pageNumber>1 ? pageNumber - 1 : 42)
                    setPageLink(url + pageNumber)
                }}>Previous</button>

                <button onClick={() => {
                    setPageNumber(pageNumber<42 ? pageNumber + 1 : 1)
                    setPageLink(url + pageNumber)
                }}>Next
                </button>
            </div>
            <div className={"characterGallery"}>
                {filteredCharacters.length === 0 && <p>Sorry, there are no characters to display!!</p>}
                {filteredCharacters.map((character) => <CharacterCard character={character} key={character.id}/>)}
            </div>
        </div>
    )
}
