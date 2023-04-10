import MainNavigation from "./MainNavigation";
import style from "./layout.module.css";

function Layout(props) {
  return (
    <div className="">
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
