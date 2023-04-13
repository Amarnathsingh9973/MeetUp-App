import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../component/meetups/MeetupList";
import Card from "../component/UI/Card";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let context;
  if (favoritesCtx.totalFavorites === 0) {
    context = (
      <Card>
        <p >
          <h2>You got no favorites yet.Start Adding Some??</h2>
        </p>
      </Card>
    );
  } else {
    context = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {context}
    </section>
  );
}
export default FavoritesPage;
