import { useState, useEffect } from "react";
import { IPost } from "../interfaces/posts";
import { getAllPosts } from "../services/posts.service";
import PostsContext from "../contexts/posts/provider";
import { useContext } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { addPost, removePost } = useContext(PostsContext);

  const getAllPostsFunction = async () => {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");

    setLoading(true);
    const data = await getAllPosts();

    const postsFeacture = data.map((post: IPost) => {
      const postFinded = posts.find((p: IPost) => p.id === post.id);
      return {
        ...post,
        isFeatured: postFinded ? postFinded.isFeatured : false,
      };
    });

    setPosts(postsFeacture);
    setLoading(false);
  };

  const handleFeatured = (index: number) => {
    const postsUpdated = [...posts];
    postsUpdated[index].isFeatured = !postsUpdated[index].isFeatured;

    if (postsUpdated[index].isFeatured) addPost(postsUpdated[index]);
    else removePost(postsUpdated[index]);
    setPosts(postsUpdated);
  };

  useEffect(() => {
    getAllPostsFunction();
  }, []);

  return {
    posts,
    loading,
    handleFeatured,
  };
};

export default usePosts;
