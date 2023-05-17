import { IPost } from "../interfaces/posts";

export const getAllPosts = async (): Promise<IPost[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};
