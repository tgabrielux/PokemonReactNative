import { useEffect, useState } from "react";
import { Linking, ScrollView, Text, View } from "react-native";

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
        <View key={pokemon.name}>
          <Text>{pokemon.name}</Text>
            <Text>{pokemon.url}</Text>
            <Text onPress={() => Linking.openURL(pokemon.url)}>
              {pokemon.name}
            </Text>
        </View>
      ))}
    </ScrollView>
  );
}
