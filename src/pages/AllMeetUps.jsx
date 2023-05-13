import { useEffect, useState } from "react";
import MeetupList from "../component/meetups/MeetupList";
import Card from "../component/UI/Card";

function AllMeetUpsPage() {
  let [isLoading, setIsLoading] = useState(true);
  let [loadedMeetUps, setLoadedMeetUps] = useState([]);

  let context;
  if (loadedMeetUps.length === 0) {
    context = (
      <Card>
        <p>
          <h2>You got no Meetup. Start Adding Some??</h2>
        </p>
      </Card>
    );
  } else {
    context = <MeetupList meetups={loadedMeetUps} />;
  }

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
      {/* <MeetupList meetups={loadedMeetUps} /> */}
      {context}
    </section>
  );
}
export default AllMeetUpsPage;
