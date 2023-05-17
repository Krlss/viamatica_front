export type PostContextType = {
  posts: post[];
  addPost: (post: post) => void;
  removePost: (post: post) => void;
  clearPosts: () => void;
};

export type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  isFeatured?: boolean;
};

export type PostState = {
  posts: post[];
};

export type PostReducerAction =
  | { type: "ADD_TO_POST"; payload: post }
  | { type: "REMOVE_FROM_POST"; payload: post }
  | { type: "CLEAR_POSTS" }
  | { type: "SET_POSTS"; payload: post[] };
