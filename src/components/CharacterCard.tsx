import React from "react";
import "./CharacterCard.css"
import {Character} from "./Character"

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className={"characterCard"}>
            <h3>{props.character.name}</h3>
            <img className={"rotate-center"} src={props.character.image} alt={props.character.name}/>
            <div className={"cTable"}>
                <div className={"cTable1"}>
                    <p className={"details"}>Status: </p>
                    <p className={"details"}>Species: </p>
                    <p className={"details"}>Gender: </p>
                    <p className={"details"}>Location: </p>
                </div>
                <div className={"cTable2"}>
                    <p>{props.character.status}</p>
                    <p>{props.character.species}</p>
                    <p>{props.character.gender}</p>
                    <p>{props.character.location.name}</p>
                </div>
            </div>
        </div>
        // <div className={"characterCard"}>
        //     <h3>{props.cName}</h3>
        //     <img className={"rotate-center"} src={props.cImage} alt={"Character Image"}/>
        //     <div className={"cTable"}>
        //         <div className={"cTable1"}>
        //             <p className={"details"}>Status: </p>
        //             <p className={"details"}>Species: </p>
        //             <p className={"details"}>Gender: </p>
        //             <p className={"details"}>Location: </p>
        //         </div>
        //         <div className={"cTable2"}>
        //             <p>{props.cStatus}</p>
        //             <p>{props.cSpecies}</p>
        //             <p>{props.cGender}</p>
        //             <p>{props.cLocation}</p>
        //         </div>
        //     </div>
        // </div>
    )
}