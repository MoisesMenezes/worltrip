import { Flex, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      h={["375", "335px"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgImage="url('/assets/background.jpg')">
      <Flex flexDir="column" justifyContent="center" pl={["1rem", "8rem"]}>
        <Text color="gray.300" fontSize={["25px", "36px"]} fontWeight="500">
          5 continentes,<br></br> Infinitas possibilidades.
        </Text>
        <Text color="gray.400" fontSize={["14px", "20px"]} pt="0.5rem">
          Chegou a hora de tirar do papel a viage que <br></br>
          você sempre sonhou.
        </Text>
      </Flex>

      <Image
        display={["none", "none", "block"]}
        transform="translateY(48px)"
        src="/assets/airplane.svg"
        alt="plane"
        mr="4rem"
        w={["300px", "300px", "300px", "430px"]}
      />
    </Flex>
  );
};

export default Hero;
