import { Route, Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";
import Layout from "./component/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/MeetUp-App" element={<AllMeetUpsPage />}></Route>
        <Route path="/new_meetup" element={<NewMeetUpPage />}></Route>
        <Route path="/favorite" element={<FavoritesPage />}></Route>
        <Route path="*" element={<AllMeetUpsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
