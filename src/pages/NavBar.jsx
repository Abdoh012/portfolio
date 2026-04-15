import MyName from "../components/nav/MyName";
import Navigation from "../components/nav/Navigation";

export default function NavBar() {
  return (
    <nav className="p-5 shadow center fixed z-50 bg-white w-full md:px-20 md:py-0">
      <div className="container space-between">
        <MyName />

        <Navigation />
      </div>
    </nav>
  );
}
