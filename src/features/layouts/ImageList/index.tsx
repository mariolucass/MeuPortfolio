import { ImageList } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

export const Images = ({ array }: any) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {array.map((item: any) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
