export interface ICardProject {
  img: string;
  title: string;
  description: string;
  vercel: string;
  github: string;
}

export interface IListProject {
  list: ICardProject[];
}
