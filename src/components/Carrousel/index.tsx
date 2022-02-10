import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Box } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide, { SlideProps } from "../Slide";

export const Carrousel = () => {
  const continents: SlideProps[] = [
    {
      img: "/img/england.jpg",
      title: "Europa",
      subtitle: "o continente mais antigo do mundo"
    },
    {
      img: "/img/africa.jpg",
      title: "África",
      subtitle: "o berço da humanidade"
    },
    {
      img: "/img/asia.jpg",
      title: "Ásia",
      subtitle: "o maior dos continentes"
    },
    {
      img: "/img/america.jpg",
      title: "Ámerica",
      subtitle: "América é subdividida em América do Norte, América do Sul e América Central"
    },
    {
      img: "/img/oceania.jpg",
      title: "Oceania",
      subtitle: "composta por vários grupos de ilhas do Oceano Pacífico"
    }
  ];

  return (
    <Box
      width="100%"
      css={{
        "-webkit-backdrop-filter": "blur(2.4px)",
        ".swiper-pagination-bullet-active": {
          backgroundColor: "#FFBA08"
        },
        ".swiper-button-prev, .swiper-button-next": {
          color: "#FFBA08"
        }
      }}>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper">
        {continents.map((continent) => (
          <SwiperSlide key={continent.title}>
            <Slide img={continent.img} title={continent.title} subtitle={continent.subtitle} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
