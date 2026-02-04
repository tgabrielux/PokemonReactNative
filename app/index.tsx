import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

interface pokemon{
  name: string;
  url: string;
}

export default function Index() {
const [pokemon, setPokemon] = useState<pokemon[]>([])

useEffect(() => {
  // fetch API Data 
    fetchPokemon()
}, [])
async function fetchPokemon() {
  try{
    const reponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=10"
    );
    const data =await reponse.json();

    setPokemon(data.results);
  } catch(e){
    console.log(e);
  }
}

  return (
    <ScrollView>
      {pokemon.map((pokemon)=>(
        <view key={pokemon.name}>
          <text>{pokemon.name}</text>
        </view>
      ))}
    </ScrollView>
  );
}
