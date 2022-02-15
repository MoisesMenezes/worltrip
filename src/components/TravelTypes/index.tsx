import { Box, Flex, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

interface TravelProps {
  name: string;
  icon: string;
}

const types: TravelProps[] = [
  {
    name: "vida noturna",
    icon: "/assets/icons/vidanoturna.svg"
  },
  {
    name: "praia",
    icon: "/assets/icons/praia.svg"
  },
  {
    name: "moderno",
    icon: "/assets/icons/moderno.svg"
  },
  {
    name: "clássico",
    icon: "/assets/icons/classico.svg"
  },
  {
    name: "e mais...",
    icon: "/assets/icons/emais.svg"
  }
];

const TravelTypes = () => {
  const isWideVersion = useBreakpointValue({
    md: true,
    base: false
  });

  return (
    <Grid
      as="ul"
      gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(5,1fr)" }}
      gap="1.5rem"
      textAlign="center">
      {types.map((type) => (
        <Grid as="li" key={type.name} gap="1.5rem">
          {isWideVersion && <Image src={type.icon} height={85} width={85} />}

          <Text
            fontWeight="600"
            color={{ base: "yellow.500", md: "gray.800" }}
            fontSize={{ base: "1.125rem", md: "1.5rem " }}
            display="flex"
            justifyContent="center">
            {!isWideVersion && (
              <Text as="span" pr="8px">
                .
              </Text>
            )}

            {type.name}
          </Text>
        </Grid>
      ))}
    </Grid>
  );
};

export default TravelTypes;
