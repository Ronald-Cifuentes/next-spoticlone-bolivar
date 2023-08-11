import { FC } from "react";
import { HeadingProps } from "./interfaces";

const Heading: FC<HeadingProps> = ({
  dataTestId = "heading",
  className,
  text,
}) => {
  return (
    <h1
      data-testid={dataTestId}
      className={`text-2xl inline-block font-bold mb-5 ${className}`}
    >
      {text}
    </h1>
  );
};

export default Heading;
