import { Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Heading as={"h1"} textAlign="center" size="xl" style={{ color: "green", fontWeight: "bold" }}>
        Welcome!
      </Heading>
    </Box>
  );
};

export default Home;
