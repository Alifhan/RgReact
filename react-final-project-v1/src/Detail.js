import { Image, Button, Text, Card, HStack, CardHeader, CardBody, Heading, Box, Badge, ModalOverlay, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [yugiohCardDetail, setYugiohCardDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`;
  const getDetailCard = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setYugiohCardDetail(responseJson.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // useeffect akan berjalan sebelum merender elemen JSX
  useEffect(() => {
    getDetailCard();
  }, []);

  return (
    <>
      <Link to="/">
        <Button>Back</Button>
      </Link>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        yugiohCardDetail.map((card, index) => (
          <div key={index}>
            <div display="flex">
              {card.card_images.map((item, index) => (
                <Image key={index} maxW="sm" src={item.image_url} alt="" />
              ))}
              <div>
                <Heading as="h2">{card.name}</Heading>
                <Text>{`Level: ${card.level}`}</Text>
                <Text>{card.attribute}</Text>
                <Text>
                  ATK/{card.atk} DEF/{card.def}
                </Text>
                <Text>{`[ ${card.type} / ${card.race} ]`}</Text>
                <Text>{`Description: ${card.desc}`}</Text>
              </div>
            </div>
            <Heading fontStyle="bold">Card Set</Heading>
            <div display="flex">
              {/* // nama,pack,code,rarity,price */}
              {card.card_sets.map((cardSet) => (
                <Box>
                  <Text>{`Name: ${cardSet.set_name}`}</Text>
                  <Text>{`Code: ${cardSet.set_code}`}</Text>
                  <Text>{`Rarity: ${cardSet.set_rarity}`}</Text>
                  <Text>{`Price: ${cardSet.set_price}`}</Text>
                </Box>
              ))}
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Detail;
