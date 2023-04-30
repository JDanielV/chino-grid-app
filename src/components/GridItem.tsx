import React from "react";

interface GridItemProps {
  numItem: number;
}

export const GridItem: React.FunctionComponent<GridItemProps> = ({
  numItem,
}) => {
  return <div className="grid__item">{numItem}</div>;
};
