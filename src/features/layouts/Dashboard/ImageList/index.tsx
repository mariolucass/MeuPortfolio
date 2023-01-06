import { ImageList } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

export const Images = ({ list }: any) => (
  <ImageList variant="masonry" cols={3} gap={12} classes={"imgList"}>
    {list.map((item: any) => (
      <ImageListItem key={item.img} sx={{ width: 166, height: 166 }}>
        <img
          src={`${item.img}?w=564&fit=crop&auto=format`}
          srcSet={`${item.img}?w=564&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
);
