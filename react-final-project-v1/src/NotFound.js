import { Box, Heading } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box height={"100vh"} width="100%" display={"flex"} justifyContent="center" alignItems={"center"}>
      <Heading as={"h1"}>404 Page not found!</Heading>
    </Box>
  );
};

export default NotFound;
