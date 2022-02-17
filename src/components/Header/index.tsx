import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { asPath } = useRouter();

  return (
    <Flex as="header" w="100%" h="100px" justifyContent="center">
      {asPath !== "/" && (
        <Box fontSize="2.5rem" position="absolute" left="3%" top="2%">
          <Link href="/" passHref>{`<`}</Link>
        </Box>
      )}
      <Image src="/assets/logo.svg" height={46} width={184} />
    </Flex>
  );
};

export default Header;
