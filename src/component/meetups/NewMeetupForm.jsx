import Card from "../UI/Card";
import style from "./newMeetupForm.module.css";
function NewMeetupForm() {
  return (
    <Card>
      <form className={style.form}>
        <div className={style.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={style.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" />
        </div>
        <div className={style.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={style.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea name="" id="description" required rows="5"></textarea>
        </div>
        <div className={style.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
