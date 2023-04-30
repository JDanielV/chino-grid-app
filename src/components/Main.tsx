import React, { useState } from "react";
import { Grid } from "./Grid";

export const Main: React.FunctionComponent = () => {
  const [numItems, setNumItems] = useState<number>(5);
  const [maxRandomNum, setMaxRandomNum] = useState<number>(32);
  const [numGrids, setNumGrids] = useState<number>(60);
  const [gridsArray, setGridsArray] = useState<number[][]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "number-items") {
      setNumItems(Number(e.target.value));
    } else if (e.target.name === "max-random-number") {
      setMaxRandomNum(Number(e.target.value));
    }
  };

  const generateRandomNumber = (maxNum: number): number =>
    Math.floor(Math.random() * (maxNum - 1)) + 1;

  const isGridUnique = (grid: number[]): boolean => {
    let isUnique = true;

    // comparison logic

    return isUnique;
  };

  const populateNumbersArr = (): number[] => {
    const arr: number[] = [];

    for (let i = 0; i < numItems; i) {
      let randomNumber = generateRandomNumber(maxRandomNum);

      if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
        i++;
      }
    }

    return arr;
  };

  const populateGridsArray = (): void => {
    let newGrid: number[] = populateNumbersArr();

    for (let i = 0; i < numGrids; i) {
      if (isGridUnique(newGrid)) {
        setGridsArray([...gridsArray, newGrid]);
        i++;
      } else {
        newGrid = populateNumbersArr();
      }
    }
  };

  return (
    <div className="main">
      <fieldset className="main__input-wraper">
        <label htmlFor="number-items" className="main__input-label">
          Number of items
        </label>
        <input
          name="number-items"
          type="number"
          className="main__input"
          placeholder="Enter multiple of 5"
          onChange={handleInputChange}
        />
        <label htmlFor="max-random-number" className="main__input-label">
          Max number
        </label>
        <input name="max-random-number" type="text" className="main__input" />
      </fieldset>
      {numItems != null && numItems > 4 && numItems % 5 === 0 ? (
        gridsArray.map((grid) => <Grid numbersArr={grid} />)
      ) : (
        <span>Must be multiple of 5!!!!!!!!!</span>
      )}
    </div>
  );
};
