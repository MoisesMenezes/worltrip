import { Flex } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  return (
    <Flex as="header" w="100%" h="100px" justifyContent="center">
      <Image src="/assets/logo.svg" height={46} width={184} />
    </Flex>
  );
};

export default Header;
