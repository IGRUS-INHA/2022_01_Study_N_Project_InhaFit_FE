import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LayOut from "./components/pages/layout/LayOut";
import Main from "./components/pages/main/Main";
import Profile from "./components/pages/profile/Profile";
import Admim from "./components/pages/admin/Admin";
import Board from "./components/pages/board/Board";
import Market from "./components/pages/market/Market";
import Notice from "./components/pages/notice/Notice";
import Qna from "./components/pages/qna/Qna";
import Search from "./components/pages/search/Search";
import SignIn from "./components/pages/signIn/SignIn";
import SignUp from "./components/pages/signUp/SignUp";
import Workout from "./components/pages/workout/Workout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayOut />}>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="board" element={<Board />}></Route>
        <Route path="qna" element={<Qna />}></Route>
        <Route path="suggestion" element={<Main />}></Route>
        <Route path="notice" element={<Notice />}></Route>
        <Route path="workout" element={<Workout />}></Route>
        <Route path="market" element={<Market />}></Route>
        <Route path="admin" element={<Admim />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
