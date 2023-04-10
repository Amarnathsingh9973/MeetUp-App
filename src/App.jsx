import { Route, Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";
import Layout from "./component/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} exact></Route>
        <Route path="/new_meetup" element={<NewMeetUpPage />}></Route>
        <Route path="/favorite" element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
