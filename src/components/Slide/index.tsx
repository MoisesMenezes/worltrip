import { Box, Heading, Image } from "@chakra-ui/react";

export interface SlideProps {
  slug?: string;
  img: string;
  title: string;
  subtitle: string;
}

const Slide = ({ img, title, subtitle }: SlideProps) => {
  return (
    <Box position="relative" display="flex" justifyContent="center" alignItems="center">
      <Box zIndex="10" position="absolute" textAlign="center">
        <Heading color="gray.300" mb="1rem" fontSize={{ base: "1.5rem", md: "3rem" }}>
          {title}
        </Heading>
        <Heading color="gray.400" fontSize={{ base: "0.875rem", md: "1.5rem" }}>
          {subtitle}
        </Heading>
      </Box>
      <Image
        src={img}
        width="1280px"
        height={{ base: "250px", md: "450px" }}
        alt={title}
        objectFit="cover"
      />
    </Box>
  );
};

export default Slide;
