import { Box, Image, Text } from "@chakra-ui/react";

interface CardValues {
  flag: string;
  country: string;
  place: string;
  img: string;
}

interface CardProps {
  card: CardValues;
}

const Card = ({ card }: CardProps) => {
  return (
    <Box background="white" w="256px" h="300px" pos="relative" display="flex" flexDir="column">
      <Image
        borderRadius="4px 4px 0 0"
        w="266px"
        h="174px"
        objectFit="cover"
        objectPosition="bottom"
        src={card.img}
        alt={card.place}
      />

      <Box
        border="1px solid rgba(255, 186, 8,0.5)"
        h="100%"
        borderTop="none"
        borderRadius="4px"
        display="flex"
        justifyContent="space-between"
        p="1rem 2rem">
        <Box>
          <Text fontWeight="600" fontSize="20px" mb="12px">
            {card.place}
          </Text>

          <Text color="gray.500" fontWeight="500">
            {card.country}
          </Text>
        </Box>

        <Image w="30px" h="30px" objectFit="cover" alignSelf="center" src={card.flag} alt="flag" />
      </Box>
    </Box>
  );
};

export default Card;
