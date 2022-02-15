import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide, { SlideProps } from "../Slide";

export const Carrousel = () => {
  const router = useRouter();
  const continents: SlideProps[] = [
    {
      slug: "europe",
      img: "/img/europe.jpg",
      title: "Europa",
      subtitle: "o continente mais antigo do mundo"
    },
    {
      slug: "africa",
      img: "/img/africa.jpg",
      title: "África",
      subtitle: "o berço da humanidade"
    },
    {
      slug: "asia",
      img: "/img/asia.jpg",
      title: "Ásia",
      subtitle: "o maior dos continentes"
    },
    {
      slug: "north-america",
      img: "/img/north-america.jpg",
      title: "Amérerica do Norte",
      subtitle:
        "A América do Norte produz grande parte dos alimentos consumidos no mundo. Trigo, milho, soja, feno, frutas."
    },
    {
      slug: "south-america",
      img: "/img/south-america.jpg",
      title: "América do Sul",
      subtitle:
        "América do Sul abriga a maior diversidade física e climática de todos os continente"
    },
    {
      slug: "oceania",
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
          <SwiperSlide
            style={{
              cursor: "pointer"
            }}
            key={continent.title}
            onClick={() => router.push(`/continent/${continent.slug}`)}>
            <Slide img={continent.img} title={continent.title} subtitle={continent.subtitle} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
