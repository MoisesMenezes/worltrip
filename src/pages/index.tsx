import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";

import TravelTypes from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <div>
      <Box as="section" p="3rem 7rem">
        <TravelTypes />
      </Box>
      <Box w={{ base: "60px", md: "90px" }} h="2px" bg="gray.800" m="0 auto" />
    </div>
  );
};

export default Home;
