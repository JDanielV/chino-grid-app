import React, { useState, useEffect, useCallback } from "react";
import { GridItem } from "./GridItem";

type GridProps = {
  numItems: number;
};

export const Grid: React.FunctionComponent<GridProps> = ({ numItems }) => {
  const populateItemsArr = useCallback((): number[] => {
    const arr = [];
    for (let i = 0; i < numItems + 1; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [numItems]);

  const generateRandomNumber = (maxNum: number): number =>
    Math.floor(Math.random() * (maxNum - 1)) + 1;

  const [itemsArr, setItemsArr] = useState<number[]>(populateItemsArr());

  useEffect(() => {
    setItemsArr(populateItemsArr());
  }, [numItems, populateItemsArr]);

  return (
    <div className="grid">
      {itemsArr.map((item) => (
        <GridItem key={item} numItem={generateRandomNumber(numItems)} />
      ))}
    </div>
  );
};
