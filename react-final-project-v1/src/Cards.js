import React from "react";
import { Image, Heading, Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  return (
    <SimpleGrid display={"flex"} justifyContent={"center"} style={{ flexWrap: "wrap" }}>
      {card.map((yugioh, index) => (
        <Link key={index} to={`/card/${yugioh.id}`}>
          <Box className="yugioh-card">
            {yugioh.card_images.map((item, index) => (
              <Image m={2} key={index} w={"400px"} src={item.image_url} alt="" />
            ))}
            <Box>
              <Heading w={"350px"} as="h2" fontSize={"xl"} fontWeight={"bold"} textAlign={"center"}>
                {yugioh.name}
              </Heading>
            </Box>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default Cards;
