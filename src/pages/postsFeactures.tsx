import PostsContext from "../contexts/posts/provider";
import { useContext } from "react";
import Table from "../components/table";
import { Link } from "react-router-dom";
import { IPost } from "../interfaces/posts";
import useLogout from "../hooks/useLogout";

const PostsFeacturesPage = () => {
  const { posts, removePost } = useContext(PostsContext);
  const { logout } = useLogout();

  const handleFeatured = (post: IPost) => {
    removePost(post);
  };

  return (
    <>
      <div className="flex items-center w-full justify-end self-end px-20 py-2 gap-5">
        <Link to="/" className="font-bold text-lg underline">
          Go back
        </Link>
        <button className="font-bold text-lg" onClick={logout}>
          Logout
        </button>
      </div>
      <Table
        label="POSTS FEACTURE LIST"
        posts={posts}
        onClick={(index, post) => handleFeatured(post)}
      />
    </>
  );
};

export default PostsFeacturesPage;
