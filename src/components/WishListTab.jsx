import { useState, useEffect } from "react";

const WishListTab = ({ activate }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    active ? setActive(true) : setActive(false);
  }, []);

  return (
    <div
      className={active ? "wishlisttab active" : "wishlisttab"}
      onClick={() => {
        setActive(!active);
      }}
    ></div>
  );
};

export default WishListTab;
