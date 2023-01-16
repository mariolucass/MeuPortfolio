import * as styled from "./styles";
import * as databases from "../../../database";

import { useProjectContext } from "../../../../context/ProjectContext/ProjectsContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";

export const ProjectsImageList = () => {
  const { projects } = useProjectContext();

  const imgList = projects.map((item) => {
    const elem = databases.Projects.listImg.find(
      (elem) => elem.name === item.name
    );

    if (elem) {
      item.img = elem.url;
    }

    return (
      <SwiperSlide key={item.name}>
        <styled.ImgStyled src={item.img} />
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
