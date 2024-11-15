import { useState } from "react";

const useSubMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return { openSubMenu, toggleSubMenu };
};

export default useSubMenu;
