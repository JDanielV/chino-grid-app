import React, { useEffect, useState } from "react";
import { Grid } from "./Grid";
import { log } from "console";

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
    } else if (e.target.name === "number-grids") {
      setNumGrids(Number(e.target.value));
    }
  };

  const generateRandomNumber = (maxNum: number): number =>
    Math.floor(Math.random() * (maxNum)) + 1;

    function isGridUnique(arr1: number[]): boolean {
      for (let i = 0; i < gridsArray.length; i++) {
        if (gridsArray[i].length !== arr1.length) {
          continue;
        }
        let isMatched = true;
        for (let j = 0; j < arr1.length; j++) {
          if (arr1[j] !== gridsArray[i][j]) {
            isMatched = false;
            break;
          }
        }
        if (isMatched) {
          return false;
        }
      }
      return true;
    }

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
    const existing = [...gridsArray];

    for (let i = 0; existing.length < numGrids; i) {
      let newGrid: number[] = populateNumbersArr();
      if (isGridUnique(newGrid)) {
        existing.push(newGrid);
        i++;
      }
    }
    setGridsArray(existing);
  };

  return (
    <div className="main">
      <fieldset className="main__input-wraper">
        <label htmlFor="number-items" className="main__input-label">
          Number of items in grid
        </label>
        <input
          name="number-items"
          type="number"
          className="main__input"
          placeholder="Enter multiple of 4"
          onChange={handleInputChange}
        />
        <label htmlFor="max-random-number" className="main__input-label">
          Max number
        </label>
        <input name="max-random-number" type="number" className="main__input" onChange={handleInputChange} />
        <label htmlFor="number-grids" className="main__input-label">How many grids?</label>
        <input name="number-grids" type="number" className="main__input" onChange={handleInputChange} />
        <button onClick={populateGridsArray}>Go</button>
      </fieldset>
      {numItems != null && numItems > 4 && numItems % 4  === 0 ? (
        gridsArray.map((grid, i) => <Grid key={i} numbersArr={grid} />)
      ) : (
        <span>Must be multiple of 4!!!!!!!!!</span>
      )}
    </div>
  );
};
