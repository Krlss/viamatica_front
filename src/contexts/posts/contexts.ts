import { createContext } from "react";
import { PostContextType } from "../../types/posts";

const postsContext = createContext<PostContextType>({} as PostContextType);
export default postsContext;
