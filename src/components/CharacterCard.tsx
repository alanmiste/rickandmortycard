import React from "react";
type character ={
    cName: string,
    cStatus: string,
    cSpecies: string,
    cGender: string,
    cLocation: string,
    cImage: string
}
export default function CharacterCard(props: character){
    return(
        <div className={"characterCard"}>
            <h3>{props.cName}</h3>
            <img src={props.cImage} alt={"Character Image"}/>
            <p>Status: {props.cStatus}</p>
            <p>Species: {props.cSpecies}</p>
            <p>Gender: {props.cGender}</p>
            <p>Location: {props.cLocation}</p>
        </div>
    )
}