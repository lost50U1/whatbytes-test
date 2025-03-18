import { Icon } from "@iconify/react";
import React from "react";

export default function QuickStatistics() {
  const rank = 4;
  const percentile = 90;
  const correctAnswers = 12;
  return (
    <div className="card">
      <h3 className="card-title">Quick Statistics</h3>
      <div className="mt-4 lg:mt-7 flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-[#F4F6F8] rounded-full w-16 h-16 flex items-center justify-center">
            <Icon icon="noto:trophy" className="w-6 h-6" />
          </div>
          <div className="border-r border-lightgray pr-4">
            <h4 className="text-primary font-semibold text-2xl">{rank}</h4>
            <p className="text-lightgray uppercase">Your Rank</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#F4F6F8] rounded-full w-16 h-16 flex items-center justify-center">
            <Icon icon="noto:clipboard" className="w-6 h-6" />
          </div>
          <div className="border-r border-lightgray pr-4">
            <h4 className="text-primary font-semibold text-2xl">
              {percentile}%
            </h4>
            <p className="text-lightgray uppercase">percentile</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#F4F6F8] rounded-full w-16 h-16 flex items-center justify-center">
            <Icon icon="noto:check-mark-button" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-primary font-semibold text-2xl">
              {correctAnswers} / 15
            </h4>
            <p className="text-lightgray uppercase">correct answers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
