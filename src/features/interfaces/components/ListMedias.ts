export interface IListMedias {
  list: IUser[];
}

interface IUser {
  id: number;
  nome: string;
  img: string;
  linkedin: string;
  github: string;
  curriculo: string;
}
