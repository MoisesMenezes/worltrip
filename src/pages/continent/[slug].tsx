import { Box, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { RichText } from "prismic-dom";
import { ParsedUrlQuery } from "querystring";

import { getPrismicClient } from "../../services/prismic";

interface ContinentProps {
  slug: string;
  statics: {
    countries: string;
    languages: string;
    cities: string;
  };
  formatedCities: {
    country: string;
    place: string;
    img: string;
  };
  resume: string;
}

const Continent = ({ slug, statics, resume, formatedCities }: ContinentProps) => {
  console.log("statics", formatedCities);
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
  const prismic = getPrismicClient();
  const { slug } = params as Params;

  const response = await prismic.getByUID("continent", String(slug), {
    lang: "pt-br"
  });

  const statics = {
    countries: response.data.qtd_country,
    languages: response.data.qtd_language,
    cities: response.data.qtd_city_100
  };

  const resume = RichText.asText(response.data.resume);

  const cities = response.data.group_citys.map((city: any) => {
    return city.citys_100;
  });

  const formatedCities = await Promise.all(
    cities.map(async (city: any) => {
      const data = await prismic.getByUID("city_100", city.uid, {
        lang: "pt-br"
      });

      return {
        country: RichText.asText(data.data.country),
        place: RichText.asText(data.data.place),
        img: data.data.img_place.url
      };
    })
  );

  return {
    props: { slug, statics, resume, formatedCities },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
