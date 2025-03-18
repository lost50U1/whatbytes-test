import React from "react";
import CircularChart from "./CircularChart";

export default function QuestionAnalysis() {
  const correct = 12;
  const question = 15;

  return (
    <div className="card2">
      <div className="flex justify-between items-center">
        <h3 className="card-title">Question Analysis</h3>
        <p className="text-tertiary font-semibold text-lg md:text-xl">
          {correct}/{question}
        </p>
      </div>
      <div className="mt-4 lg:mt-7">
        <p>
          <span className="font-semibold">
            You scored {correct} question correct out of {question}.
          </span>
          However it still needs some improvements.
        </p>
      </div>
      {/* pie chart  */}
      <CircularChart correct={correct} question={question} />
    </div>
  );
}
