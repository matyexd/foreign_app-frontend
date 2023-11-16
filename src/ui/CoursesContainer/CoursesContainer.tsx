import React, { FC } from "react";
import st from "./CoursesContainer.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  error: boolean;
}

const CoursesContainer: FC<Props> = ({
  children,
  className,
  error,
  isLoading,
  ...props
}) => {
  return (
    <div className={`${className} ${st.container}`} {...props}>
      {error && isLoading ? <>Ошибка</> : ""}
      {!error && isLoading ? children : ""}
      {React.Children.toArray(children).length === 0 ? <>Нет курсов</> : ""}
    </div>
  );
};

export default CoursesContainer;
