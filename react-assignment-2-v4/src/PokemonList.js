import { useEffect, useState } from "react";
import { Card, HStack, CardHeader, Heading, Box, Badge, Button, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const [halaman, setHalaman] = useState(1);

  const moveTo = (direction) => {
    if (direction === "prev") {
      setsearchParams({
        page: halaman - 1,
      });
      setHalaman(halaman - 1);
    } else {
      setsearchParams({
        page: halaman + 1,
      });
      setHalaman(halaman + 1);
    }
  };
  useEffect(() => {
    setHalaman(parseInt(searchParams.get("page") || 1));
  }, [searchParams]);

  return (
    <HStack display={"flex"} justifyContent="center" marginBottom={"5"}>
      {halaman === 1 ? (
        <Button backgroundColor={"white"} boxShadow="md" disabled>
          Prev
        </Button>
      ) : (
        <Button backgroundColor={"white"} boxShadow="md" onClick={() => moveTo("prev")}>
          Prev
        </Button>
      )}
      <Button backgroundColor={"white"} boxShadow="md" onClick={() => moveTo("next")}>
        Next
      </Button>
    </HStack>
  );
};

const PokemonList = ({ pokemons }) => {
  return (
    pokemons &&
    pokemons.length > 0 && (
      <Box role="pokemon-list">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <Card boxShadow={"xl"}>
              <CardHeader>
                <Heading as="h3" size="md" textAlign={"center"}>
                  {pokemon.name}
                </Heading>
              </CardHeader>
              <HStack display={"flex"} justifyContent="center">
                <Image src={pokemon.sprites.front_default} alt="Front Default" />
                <Image src={pokemon.sprites.back_default} alt="Back Default" />
                <Image src={pokemon.sprites.front_shiny} alt="Front Shiny" />
                <Image src={pokemon.sprites.back_shiny} alt="Back Shiny" />
              </HStack>
              <HStack display={"flex"} justifyContent="center">
                {pokemon.types.map((power, index) => (
                  <Badge w={"20"} h={"10"} display={"flex"} justifyContent="center" margin={"2"} borderRadius="10" alignItems="center" key={index}>
                    <Text>{power.type.name}</Text>
                  </Badge>
                ))}
              </HStack>
            </Card>
          </Link>
        ))}
      </Box>
    )
  );
};
const Home = () => {
  const fetchPokemons = async (page) => {
    const displayPerPage = 20;
    const offset = (page - 1) * 20;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${displayPerPage}&offset=${offset}`;

    const response = await fetch(url);
    const data = await response.json();
    const pokemonList = data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      return pokemonData;
    });
    setPokemons(await Promise.all(pokemonList));
  };

  const [pokemons, setPokemons] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || 1);
    fetchPokemons(page);
  }, [searchParams]);

  return (
    <>
      <Heading textAlign={"center"} as="h2" size="lg">
        Pokemon List
      </Heading>
      <Pagination />
      <PokemonList pokemons={pokemons} />
    </>
  );
};

export default Home;
