import { ImageList } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

export const Images = ({ list }: any) => (
  <ImageList variant="masonry" cols={4} gap={8}>
    {list.map((item: any) => (
      <ImageListItem key={item.img} sx={{ width: 166, height: 166 }}>
        <img src={item.img} srcSet={item.img} alt={item.title} />
      </ImageListItem>
    ))}
  </ImageList>
);
