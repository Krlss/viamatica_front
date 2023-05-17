import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/signInPage";
import RequireAuth from "../components/requireAuth";
import PostsPage from "../pages/postsPage";
import PostsFeacturesPage from "../pages/postsFeactures";
import Missing from "../components/missing";
import { AuthProvider } from "../contexts/auth/authProvider";
import { PostsProvider } from "../contexts/posts/provider";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>
          <Routes>
            <Route path="/" element={<RequireAuth />}>
              <Route path="/" element={<PostsPage />} />
              <Route path="/posts-featured" element={<PostsFeacturesPage />} />
            </Route>

            <Route path="/login" element={<SignIn />} />

            <Route path="*" element={<Missing />} />
          </Routes>
        </PostsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default RoutesComponent;
