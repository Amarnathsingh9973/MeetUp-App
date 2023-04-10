import { Route, Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} exact></Route>
        <Route path="/new_meetup" element={<NewMeetUpPage />}></Route>
        <Route path="/favorite" element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
