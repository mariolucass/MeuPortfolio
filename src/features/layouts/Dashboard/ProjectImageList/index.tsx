import * as styled from "./styles";
import * as databases from "../../../database";

import { useProjectContext } from "../../../../context/ProjectContext/ProjectsContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";

export const ProjectsImageList = () => {
  const { projects } = useProjectContext();

  const defaultImage =
    "https://live.staticflickr.com/65535/52775566948_f4ca9647f6_k.jpg";

  const listWithoutBackEnd = projects.filter((item) => {
    return !databases.Projects.listBackEnd.find((elem) => elem === item.name);
  });

  const imgList = listWithoutBackEnd.map((item) => {
    const elem = databases.Projects.listImg.find(
      (elem) => elem.name === item.name
    );

    if (elem) {
      item.img = elem.url;
    } else {
      item.img = defaultImage;
    }

    return (
      <SwiperSlide key={item.name}>
        <styled.ImgStyled src={item.img} alt={item.name} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      modules={[Autoplay, EffectCreative]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {imgList}
    </Swiper>
  );
};
