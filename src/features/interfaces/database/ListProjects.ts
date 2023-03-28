export interface IProject {
  id?: number;
  img?: string;
  name: string;
  description?: string;
  vercel?: string;
  github?: string;
  has_pages?: boolean;
  updatedAt?: string;
  date?: string;
  svn_url?: string;
  diagram?: string;
}

export interface IListProject {
  list: IProject[];
}
