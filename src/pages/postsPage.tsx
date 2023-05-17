import usePosts from "../hooks/usePosts";
import LoadingPage from "../components/loading";
import Table from "../components/table";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const PostsPage = () => {
  const { posts, loading, handleFeatured } = usePosts();
  const { logout } = useLogout();

  if (loading) return <LoadingPage />;

  return (
    <>
      <div className="flex items-center w-full justify-end self-end px-20 py-2 gap-5">
        <Link to="/posts-featured" className="font-bold text-lg underline">
          Featured Posts
        </Link>
        <button className="font-bold text-lg" onClick={logout}>
          Logout
        </button>
      </div>
      <Table
        label="POSTS LIST"
        posts={posts}
        onClick={(index, id) => handleFeatured(index)}
      />
    </>
  );
};

export default PostsPage;
