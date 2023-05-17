import { PostReducerAction, PostState, post } from "../../types/posts";

export default (state: PostState, action: PostReducerAction) => {
  switch (action.type) {
    case "ADD_TO_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "REMOVE_FROM_POST":
      return {
        ...state,
        posts: state.posts.filter(
          (post: post) => post.id !== action.payload.id
        ),
      };
    case "CLEAR_POSTS":
      return {
        ...state,
        posts: [],
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
