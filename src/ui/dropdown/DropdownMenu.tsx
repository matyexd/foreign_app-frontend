import React, { FC, useEffect, useRef, useState } from "react";
import st from "./DropdownMenu.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  values: { name: string; value: string }[];
  setCurrent: (value: { name: string; value: string }) => void;
  current: { name: string; value: string };
}
const DropdownMenu: FC<Props> = ({
  className = "",
  values,
  setCurrent,
  current,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current!.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div {...props} className={`${className} ${st.menu}`} ref={menuRef}>
      <div
        className={`${st.menu__head} ${open ? st.menu__head_open : ""}`}
        onClick={() => setOpen(!open)}
      >
        {current.name}
      </div>

      {open && (
        <div className={st.menu__body}>
          <div className={st.menu__scroll}>
            {values.map((value) => (
              <div
                key={value.value}
                onClick={() => {
                  setCurrent(value);
                  setOpen(!open);
                }}
                className={st.menu__item}
              >
                {value.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
