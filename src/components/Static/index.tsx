import { Box, Text } from "@chakra-ui/react";

interface StaticProps {
  value: string;
  label: string;
}

const Static = ({ label, value }: StaticProps) => {
  return (
    <Box fontWeight="600">
      <Text color="yellow.500" fontSize={{ base: "1.5rem", md: "3rem" }}>
        {value}
      </Text>
      <Text fontWeight={{ base: "400", md: "600" }} fontSize={{ base: "1.125rem", md: "1.5rem" }}>
        {label}
      </Text>
    </Box>
  );
};

export default Static;
