export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  isFeatured?: boolean;
}

export interface TableProps {
  posts: IPost[];
  onClick: (index, id) => void;
  label: string;
}
