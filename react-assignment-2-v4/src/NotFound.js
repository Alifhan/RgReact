import { Box, Heading } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box>
      <Heading as={"h1"} textAlign="center" size="lg" style={{ color: "red", fontWeight: "bold" }}>
        404 Page Not Found
      </Heading>
    </Box>
  );
};

export default NotFound;
