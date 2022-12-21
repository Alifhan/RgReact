import React, { useEffect, useState } from "react";
import { Heading, Select } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import Cards from "./Cards";
function Home() {
  const [yugiohCard, setYugiohCard] = useState([]);
  const [isSort, setIsSort] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4";
  const getDataCard = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      if (isSort === false) {
        setYugiohCard(responseJson.data.sort((a, b) => a.name.localeCompare(b.name)));
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  function sortingData(type) {
    if (type === "Name" || type === "") {
      setYugiohCard(yugiohCard.sort((a, b) => a.name.localeCompare(b.name)));
      setIsSort(true);
    } else if (type === "Attack") {
      setYugiohCard(yugiohCard.sort((a, b) => a.atk - b.atk));
      setIsSort(true);
    } else {
      setYugiohCard(yugiohCard.sort((a, b) => a.def - b.def));
      setIsSort(true);
    }
  }
  useEffect(() => {
    getDataCard();
  }, []);

  return (
    <>
      {loading ? (
        <Box height={"100vh"} width="100%" display={"flex"} justifyContent="center" alignItems={"center"}>
          <Heading as={"h1"}>Loading...</Heading>
        </Box>
      ) : (
        <>
          <Box my={5} display={"flex"} justifyContent="center">
            <Select
              w={"50%"}
              name="sort"
              placeholder="Pilih Option"
              onChange={(e) => {
                sortingData(e.target.value);
              }}
            >
              <option value="Name">Name</option>
              <option value="Attack">Attack</option>
              <option value="Defence">Defence</option>
            </Select>
          </Box>
          <Cards card={yugiohCard} />
        </>
      )}
    </>
  );
}

export default Home;
