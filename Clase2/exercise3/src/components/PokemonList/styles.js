import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  background-image:url();
  justify-items: center;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 350px;
  margin: 10px;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const PokemonImage = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 10px;
  background-color: #F1EBE9;
  border-radius: 10px;
`;

const PokemonName = styled.h2`
  font-size: 20px;
  color: black;
  margin: 10px 0;
  text-transform: uppercase;
`;

const PokemonTitle = styled.h1`
  text-align: center;
  color: black;
  margin-bottom: 20px;
  font-size:40px;
`;

export { Container, Card, PokemonImage, PokemonName, PokemonTitle };
