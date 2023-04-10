import style from "./meetupItem.module.css";
function MeetupItem(props) {
  return (
    <li className={style.item}>
      <div className={style.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={style.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={style.actions}>
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
