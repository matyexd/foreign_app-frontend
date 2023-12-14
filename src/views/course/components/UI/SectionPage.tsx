import React, { FC } from "react";
import st from "./SectionPage.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}
const SectionPage: FC<Props> = ({ title, children, className = "" }) => {
  return (
    <div className={`${st.section} ${className}`}>
      <div className={st.section__title}>{title}</div>
      <div className={st.section__body}>{children}</div>
    </div>
  );
};

export default SectionPage;
