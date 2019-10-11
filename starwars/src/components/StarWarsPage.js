import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard"
import styled from "styled-components";

const Main = styled.div `
display:flex;
flex-wrap: wrap;
justify-content:space-evenly;
`


export default function StarWarsPage() {

    const [people, setPeople] = useState ([])
    const [query, setQuery] = useState("");

useEffect(() => {
    axios  
        .get(`https://swapi.co/api/people`)
        .then(response => {
            const people = response.data.results.filter(character =>
                character.name.toLowerCase().includes(query.toLowerCase())
              );;
            setPeople(people)
            console.log(response);
        })
        .catch(error => {
            console.log("These are not the droids your looking for", error);
        });
}, [query]);
const handleInputChange = event => {
    setQuery(event.target.value);
  };
return (
    <div>
        <form className="search">
        <input
          type="text" 
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    <Main>
      {people.map((data, index )=> {
          return (
          <StarWarsCard 
          key={index} 
          name={data.name} 
          height={data.height} 
          mass={data.mass} 
          gender={data.gender} 
          birth_year={data.birth_year}
          hair_color={data.hair_color} 
          skin_color={data.skin_color} 
          eye_color={data.eye_color}/>
           ) }
      )}
    </Main>
  </div>
);
}