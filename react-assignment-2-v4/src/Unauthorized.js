import { Box, Heading } from "@chakra-ui/react";
const Unauthorized = () => {
  return (
    <Box>
      <Heading as={"h1"} size="md" style={{ color: "red", fontWeight: "bold" }}>
        You are not authorized to open this page
      </Heading>
    </Box>
  );
};

export default Unauthorized;
