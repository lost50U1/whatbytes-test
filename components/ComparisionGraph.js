import React from "react";
import ComparisionChart from "./ComparisionChart";

export default function ComparisionGraph() {
  const correct = 12;
  const question = 15;
  const averatePercent = 72;

  const percentage = (correct / question) * 100;

  return (
    <div className="card">
      <h3 className="card-title">Comparision Graph</h3>
      <div className="mt-4 lg:mt-7 flex justify-between gap-4 lg:gap-16">
        <p>
          <span className="font-semibold">
            You scored {percentage}% percentile
          </span>
          which is lower than the average percentile {averatePercent}% of all
          engineers who took this assessment
        </p>
        <div>graph icon</div>
      </div>
      <ComparisionChart percentage={percentage} averatePercent={averatePercent} />
    </div>
  );
}
