import { ReactNode, useEffect, useReducer } from "react";
import PostsContext from "./contexts";
import PostsReducer from "./reducer";
import { IPost } from "../../interfaces/posts";

const intialState = {
  posts: [],
};

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(PostsReducer, intialState);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    dispatch({ type: "SET_POSTS", payload: posts });
  }, []);

  const addPost = (post: IPost) => {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    dispatch({ type: "ADD_TO_POST", payload: post });
  };

  const removePost = (post: IPost) => {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const newPosts = posts.filter((item: IPost) => item.id !== post.id);
    localStorage.setItem("posts", JSON.stringify(newPosts));

    dispatch({ type: "REMOVE_FROM_POST", payload: post });
  };

  const clearPosts = () => {
    localStorage.removeItem("posts");
    dispatch({ type: "CLEAR_POSTS" });
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        addPost,
        removePost,
        clearPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
