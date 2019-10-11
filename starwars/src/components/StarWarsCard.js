import React from "react";

 const StarWarsCard = props => {
   
    return (
       
            <div key={props.index}>
                <h2>{props.name}</h2>
                <div>
                        <div>
                            <h3>Height: {props.height} cm</h3>
                            <h3>Weight: {props.mass} kg</h3>
                            <h3>Gender: {props.gender}</h3>
                            
                        </div>
                        <div>
                            <h3>Born in the Year: {props.birth_year}</h3>
                            <h3>Hair: {props.hair_color}</h3>
                            <h3>Complexion: {props.skin_color}</h3>
                            <h3>Eyes: {props.eye_color}</h3>
                        </div>
                </div> 
            </div>
    )  
} 
export default StarWarsCard;