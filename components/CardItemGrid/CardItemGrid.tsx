import { FC } from "react";
import { CardItemGridProps } from "./interfaces";

const CardItemGrid: FC<CardItemGridProps> = ({
  dataTestId = "card-item-grid",
  children,
  className,
}) => {
  return (
    <div
      data-testid={dataTestId}
      className={`grid grid-cols-6 gap-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardItemGrid;
