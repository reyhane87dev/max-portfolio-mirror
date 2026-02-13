"use client";
import React, { useState } from "react";
import { Budget } from "../types/Budget";

function SelectBudget() {
  const [selectedBudget, setSelectedBudget] = useState<Budget>("5k-10k");
  return (
    <>
      <span className="block mt-10">YOUR BUDGET (USD)</span>
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedBudget("5k-10k")}
          className={
            selectedBudget === "5k-10k"
              ? "white-filled-pill text-nowrap"
              : "non-selected-pill text-nowrap"
          }
        >
          5K-10K
        </button>
        <button
          onClick={() => setSelectedBudget("10k-20k")}
          className={
            selectedBudget === "10k-20k"
              ? "white-filled-pill text-nowrap"
              : "non-selected-pill text-nowrap"
          }
        >
          10K-20K
        </button>
        <button
          onClick={() => setSelectedBudget("more")}
          className={
            selectedBudget === "more"
              ? "white-filled-pill text-nowrap"
              : "non-selected-pill text-nowrap"
          }
        >
          more
        </button>
      </div>
    </>
  );
}

export default React.memo(SelectBudget);
