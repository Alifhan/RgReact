import { useEffect, useState } from "react";
import { Badge, Tr, Td, HStack, Heading, Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          <Box>
            <Heading as="h3" size="lg" textAlign={"center"}>
              {pokemon.name}
            </Heading>
          </Box>
          <HStack display={"flex"} justifyContent="center">
            {pokemon.types.map((power, index) => (
              <Badge w={"20"} h={"9"} display={"flex"} justifyContent="center" margin={"2"} borderRadius="10" alignItems="center" key={index}>
                <Text>{power.type.name}</Text>
              </Badge>
            ))}
          </HStack>
          <HStack>
            <Image src={pokemon.sprites.front_default} />
            <Image src={pokemon.sprites.back_default} />
            <Image src={pokemon.sprites.front_shiny} />
            <Image src={pokemon.sprites.back_shiny} />
          </HStack>
          <Table>
            <Tr>
              <Td fontWeight={"bold"}>Height</Td>
              <Td>{pokemon.height}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"bold"}>Weight</Td>
              <Td>{pokemon.weight}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"bold"}>Base Experience</Td>
              <Td>{pokemon.base_experience}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"bold"}>Abilities</Td>
              {pokemon.abilities.map((content, index) => (
                <Box key={index}>
                  <h2>{content.ability.name}</h2>
                </Box>
              ))}
            </Tr>
            <Tr>
              <Td fontWeight={"bold"}>Stats</Td>
              {pokemon.stats.map((power, index) => (
                <Box key={index}>
                  <Text>
                    {power.stat.name}:{power.base_stat}
                  </Text>
                </Box>
              ))}
            </Tr>
          </Table>
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (pokemonId) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(pokemonId);
  }, [pokemonId]);

  return <Detail pokemon={pokemon} />;
};

export default Page;
