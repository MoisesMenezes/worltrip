import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import { Carrousel } from "../components/Carrousel";
import Hero from "../components/Hero";
import TravelTypes from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />

      <Box as="section" p={{ base: "2.25rem 3.125rem", md: "5rem 7rem" }}>
        <TravelTypes />
      </Box>
      <Box w={{ base: "60px", md: "90px" }} h="2px" bg="gray.800" m="0 auto" />

      <Box
        fontSize={{ base: "20px", md: "36px" }}
        fontWeight="medium"
        textAlign="center"
        p={{ base: "1.5rem", md: "3.25rem" }}>
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente </Text>
      </Box>

      <Box p={{ base: 0, md: "5rem" }} margin="0 auto" maxWidth="1440px">
        <Carrousel />
      </Box>
    </div>
  );
};

export default Home;
