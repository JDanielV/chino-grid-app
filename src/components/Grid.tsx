import React, { useState, useEffect, useCallback } from "react";
import { GridItem } from "./GridItem";

type GridProps = {
  numbersArr: number[];
};

export const Grid: React.FunctionComponent<GridProps> = ({ numbersArr }) => {
  return (
    <div className="grid">
      {numbersArr.map((number) => (
        <GridItem key={number} numItem={number} />
      ))}
    </div>
  );
};
