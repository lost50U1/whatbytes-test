"use client";

import React, { useContext } from "react";
import ComparisionChart from "./ComparisionChart";
import { RankContext } from "@/context/RankContext";
import { Icon } from "@iconify/react";

export default function ComparisionGraph() {
  const { score, percentile } = useContext(RankContext);

  const averatePercent = 72;

  return (
    <div className="card">
      <h3 className="card-title">Comparision Graph</h3>
      <div className="mt-4 lg:mt-7 flex justify-between gap-4 lg:gap-16">
        <p>
          <span className="font-semibold">
            You scored {percentile}% percentile
          </span>{" "}
          which is lower than the average percentile {averatePercent}% of all
          engineers who took this assessment
        </p>
        <div className="bg-[#F4F6F8] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
          <Icon
            icon="noto:chart-increasing"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </div>
      </div>
      <ComparisionChart
        percentage={percentile}
        averatePercent={averatePercent}
      />
    </div>
  );
}
