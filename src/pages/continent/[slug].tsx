import { Box, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

interface ContinentProps {
  slug: string;
}

const Continent = ({ slug }: ContinentProps) => {
  return (
    <Box>
      <Box position="relative">
        <Image src={`/img/${slug}.jpg`} layout="responsive" width="1440px" height="500px" />
        <Heading zIndex="100" position="absolute" top="0">
          Europa
        </Heading>
        <h1>OLA</h1>
      </Box>
    </Box>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  console.log("SLug", slug);

  return {
    props: { slug },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
