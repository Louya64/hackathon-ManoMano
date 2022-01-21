import { useState, useEffect, useRef } from "react";

const WishListTab = ({ activate, name, id, setTodisplay }) => {
  const [active, setActive] = useState(false);
  const tabRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (active && tabRef.current && !tabRef.current.contains(e.target)) {
        setActive(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [active])

  useEffect(() => {
    active ? setActive(true) : setActive(false);
  }, []);

  return (
    <div
      className={active ? "wishlisttab active" : "wishlisttab"}
      ref={tabRef}
      onClick={() => {
        setActive(!active); setTodisplay(id) ;
      }}
    >
      {name}
    </div>
  );
};

export default WishListTab;
