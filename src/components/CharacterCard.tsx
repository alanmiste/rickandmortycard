import React from "react";
import "./CharacterCard.css"
type character = {
    cName: string,
    cStatus: string,
    cSpecies: string,
    cGender: string,
    cLocation: string,
    cImage: string
}
export default function CharacterCard(props: character) {
    return (
        <div className={"characterCard"}>
            <h3>{props.cName}</h3>
            <img className={"rotate-center"} src={props.cImage} alt={"Character Image"}/>
            <div className={"cTable"}>
                <div className={"cTable1"}>
                    <p className={"details"}>Status: </p>
                    <p className={"details"}>Species: </p>
                    <p className={"details"}>Gender: </p>
                    <p className={"details"}>Location: </p>
                </div>
                <div className={"cTable2"}>
                    <p>{props.cStatus}</p>
                    <p>{props.cSpecies}</p>
                    <p>{props.cGender}</p>
                    <p>{props.cLocation}</p>
                </div>
            </div>
        </div>
    )
}