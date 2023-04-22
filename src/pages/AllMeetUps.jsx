import { useEffect, useState } from "react";
import MeetupList from "../component/meetups/MeetupList";

function AllMeetUpsPage() {
  let [isLoading, setIsLoading] = useState(true);
  let [loadedMeetUps, setLoadedMeetUps] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-cc32f-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetUps(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <h1>loading.....</h1>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetUps} />
    </section>
  );
}
export default AllMeetUpsPage;
