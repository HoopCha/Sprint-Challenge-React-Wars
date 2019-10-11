import React from "react";
import styled from "styled-components";

const Container = styled.div `
display:flex;
justify-content:center;
`

const Col1 = styled.div `
display:flex;
flex-direction:column;
padding: 0px 25px 0px 25px;
`

const Col2 = styled.div `
display:flex;
flex-direction:column;
padding: 0px 25px 0px 25px;
`

const Name =styled.h2  `
font-size: 2rem;
`

const Info =styled.h4 `
 color: #4D3B2D;
 margin: 10px;
`


 const StarWarsCard = props => {
   
const Card = styled.div `
background:#FEF1C5;
border: 2px solid ${props.eye_color};
width:30%;
margin: 30px;
border-radius:10px;
padding-bottom:1%;
`

    return (
       
            <Card key={props.index}>
                <Name>{props.name}</Name>
                <Container>
                        <Col1>
                            <Info>Height: {props.height} cm</Info>
                            <Info>Weight: {props.mass} kg</Info>
                            <Info>Gender: {props.gender}</Info>
                            
                        </Col1>
                        <Col2>
                            <Info>Born in the Year: {props.birth_year}</Info>
                            <Info>Hair: {props.hair_color}</Info>
                            <Info>Complexion: {props.skin_color}</Info>
                        </Col2>
                </Container> 
            </Card>
    )  
} 
export default StarWarsCard;