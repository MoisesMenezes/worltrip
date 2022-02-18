import { Box, Heading, Image as ChakraImage, Text, Tooltip } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { RichText } from "prismic-dom";
import { ParsedUrlQuery } from "querystring";

import Card from "../../components/Card";
import { SEO } from "../../components/SEO";
import Static from "../../components/Static";
import { getPrismicClient } from "../../services/prismic";

type FormateCities = {
  country: string;
  place: string;
  img: string;
  flag: string;
};
interface ContinentProps {
  slug: string;
  statics: {
    title: string;
    countries: string;
    languages: string;
    cities: string;
  };
  formatCities: FormateCities[];
  resume: string;
}

const Continent = ({ slug, statics, resume, formatCities }: ContinentProps) => {
  return (
    <>
      <SEO title={statics.title} description={resume} />
      <Box>
        <Box position="relative">
          <Image src={`/img/${slug}.jpg`} layout="responsive" width="1440px" height="500px" />
          <Heading
            zIndex="100"
            fontSize={{ base: "1.75rem", md: "4rem" }}
            position="absolute"
            top={{ base: "calc(50% - 20px)", md: "calc(80% - 40px)" }}
            left={{ base: "calc(45% - 20px)", md: "calc(5%)" }}
            color="white">
            {statics.title}
          </Heading>
        </Box>
        <Box
          as="section"
          p={{ base: "1.5rem 1rem", md: "3rem 4rem" }}
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap="1rem">
          <Text
            maxW="600px"
            lineHeight={{ base: "21px", md: "36px" }}
            fontSize={{ base: "0.875rem", md: "1.5rem" }}
            textAlign="justify">
            {resume}
          </Text>

          <Box display="flex" gap="2.5rem" textAlign={{ base: "start", md: "center" }}>
            <Static value={statics.countries} label="países" />
            <Static value={statics.languages} label="línguas" />
            <Box display="flex" gap="0.3rem">
              <Static value={statics.cities} label="cidades +100" />
              <Tooltip label="As melhores cidade para se visitar" placement="bottom-end">
                <ChakraImage src="/svg/info.svg" height="16px" width="16px" mt="45%" />
              </Tooltip>
            </Box>
          </Box>
        </Box>
        <Heading
          fontWeight="500"
          fontSize={{ base: "1.5rem", md: "2.25rem" }}
          pl={{ base: "1rem", md: "4rem" }}>
          Cidades + 100
        </Heading>
        <Box
          as="section"
          p={{ base: "1.5rem 1rem", md: "3rem 4rem" }}
          display="flex"
          gap="2rem"
          flexWrap="wrap"
          alignItems={{ base: "center", md: "start" }}
          flexDir={{ base: "column", md: "row" }}>
          {formatCities.map((city) => (
            <Card card={city} key={city.place} />
          ))}
        </Box>
      </Box>
    </>
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
  const prismic = getPrismicClient();
  const { slug } = params as Params;

  const response = await prismic.getByUID("continent", String(slug), {
    lang: "pt-br"
  });

  const statics = {
    title: response.data.slug[0].text,
    countries: response.data.qtd_country,
    languages: response.data.qtd_language,
    cities: response.data.qtd_city_100
  };

  const resume = RichText.asText(response.data.resume);

  const cities = response.data.group_citys.map((city: any) => {
    return city.citys_100;
  });

  const formatCities = await Promise.all(
    cities.map(async (city: any) => {
      const data = await prismic.getByUID("city_100", city.uid, {
        lang: "pt-br"
      });

      return {
        country: RichText.asText(data.data.country),
        place: RichText.asText(data.data.place),
        img: data.data.img_place.url,
        flag: data.data.flag.url
      };
    })
  );

  return {
    props: { slug, statics, resume, formatCities },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
