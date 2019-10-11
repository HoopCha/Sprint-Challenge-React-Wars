import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard"

export default function StarWarsPage() {

    const [people, setPeople] = useState ([])

useEffect(() => {
    axios  
        .get(`https://swapi.co/api/people`)
        .then(response => {
            const people = response.data.results;
            setPeople(people)
            console.log(people);
        })
        .catch(error => {
            console.log("These are not the droids your looking for", error);
        });
}, []);

return (
    <div>
    <div>
      {people.map((data, index )=> {
          return (
          <StarWarsCard key={index} name={data.name} height={data.height} mass={data.mass} gender={data.gender} birth_year={data.birth_year}
          hair_color={data.hair_color} skin_color={data.skin_color} eye_color={data.eye_color}/>
  
           ) }
      )}
    </div>
  </div>
);
}