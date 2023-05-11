"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const CalculateUtilityForm = () => {
  const numberOfRooms = 3;
  const squareFootage = 1500;
  const [zipCode, setZipCode] = useState(2743);
  const [utilityCost, setUtilityCost] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());

  const GetEstimatedAmount = async () => {
    const baseURL =
      "https://utility-demo-server.herokuapp.com/zappling/api/utility-estimate";
    const qp: any = {
      sqft: squareFootage,
      beds: numberOfRooms,
      zipcode: zipCode,
      yearBuilt: year,
    };

    const url = new URL(baseURL);
    url.search = new URLSearchParams(qp).toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => setUtilityCost(data["predictions"][0]))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    GetEstimatedAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-start items-center">
      <div className="grid grid-flow-row gap-2 lg:gap-4">
        <div className="flex justify-between mb-3">
          <h3 className="font-semibold text-lg">Utility Cost</h3>
          <div className={styles.semibold}>${utilityCost.toFixed(2)}</div>
        </div>
        <div className="grid md:grid-flow-col gap-2 grid-flow-row">
          <div className={styles.col}>
            <label className="font-semibold text-lg">No. Rooms</label>
            <input
              disabled
              type="number"
              value={numberOfRooms}
              className={styles.input}
            />
          </div>
          <div className={styles.col}>
            <label className="font-semibold text-lg">Square Footage</label>
            <input
              disabled
              type="number"
              value={squareFootage}
              className={styles.input}
            />
          </div>
        </div>
        <div className="grid md:grid-flow-col gap-2 grid-flow-row">
          <div className={styles.col}>
            <label className="font-semibold text-lg">Year</label>
            <input
              className={styles.input}
              type="text"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
            />
          </div>
          <div className={styles.col}>
            <label className="font-semibold text-lg">Zip Code</label>
            <input
              className={styles.input}
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button
          className="bg-primary rounded-lg px-3 py-2 text-white font-semibold capitalize"
          onClick={() => GetEstimatedAmount()}
        >
          Calculate Utility
        </button>
      </div>
    </div>
  );
};
