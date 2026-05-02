import { createContext, useState } from "react";

export const NavContext = createContext({
  activePage: null,
  setActivePage: () => {},
});

export function NavProvider({ children }) {
  const [activePage, setActivePage] = useState(null);

  const value = {
    activePage,
    setActivePage,
  };

  return (
    <NavContext.Provider value={value}>
      {children}
    </NavContext.Provider>
  );
}