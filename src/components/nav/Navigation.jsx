import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  // Functions
  function handleShowNav() {
    setShowNav((prev) => !prev);
  }
  return (
    <>
      <div className="md:hidden cursor-pointer">
        <FontAwesomeIcon
          onClick={handleShowNav}
          icon="fa-solid fa-bars"
          className="text-2xl"
        />
      </div>

      {/* Medium and above screens nav btns */}
      <DesktopNavBar />

      {/* Small screens */}
      <MobileNavBar show={showNav} />
    </>
  );
}
