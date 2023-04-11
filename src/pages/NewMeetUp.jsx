import {useNavigate} from "react-router-dom"
import NewMeetupForm from "../component/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const history =useNavigate();
  
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-cc32f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "applicstion/json",
        },
      }
    ).then(()=>{
      history("/");
    });
  }
  return (
    <section>
      <h1>Add New Pages</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetUpPage;
