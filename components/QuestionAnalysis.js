"use client";

import React, { useContext, useEffect, useState } from "react";
import CircularChart from "./CircularChart";
import { RankContext } from "@/context/RankContext";

export default function QuestionAnalysis() {
  const { score } = useContext(RankContext);
  const [currentScore, setCurrentScore] = useState(0);
  const question = 15;

  useEffect(() => {
    setCurrentScore(Number(score) || 0);
  }, [score]);

  return (
    <div className="card2">
      <div className="flex justify-between items-center">
        <h3 className="card-title">Question Analysis</h3>
        <p className="text-tertiary font-semibold text-lg md:text-xl">
          {currentScore}/15
        </p>
      </div>
      <div className="mt-4 lg:mt-7">
        <p>
          <span className="font-semibold">
            You scored {currentScore} question correct out of 15.
          </span>
          However it still needs some improvements.
        </p>
      </div>
      {/* pie chart  */}
      <CircularChart correct={currentScore} question={question} />
    </div>
  );
}
