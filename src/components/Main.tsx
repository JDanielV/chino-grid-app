import React, { useState, ChangeEventHandler } from "react";
import { Grid } from "./Grid";
import { log } from "console";

export const Main: React.FunctionComponent = () => {
  const [numItems, setNumItems] = useState<number>(5);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumItems(Number(e.target.value));
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
      </fieldset>
      <Grid numItems={numItems} />
    </div>
  );
};
