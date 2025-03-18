import { Icon } from "@iconify/react";
import React from "react";

export default function QuickStatistics() {
  const rank = 4;
  const percentile = 90;
  const correctAnswers = 12;
  return (
    <div className="card">
      <h3 className="card-title">Quick Statistics</h3>
      <div className="mt-4 lg:mt-7 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#F4F6F8] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
            <Icon icon="noto:trophy" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="lg:border-r lg:pr-4 lg:border-lightgray">
            <h4 className="text-primary font-semibold text-xl sm:text-2xl">
              {rank}
            </h4>
            <p className="text-lightgray uppercase text-xs sm:text-sm">
              Your Rank
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#F4F6F8] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
            <Icon icon="noto:clipboard" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="lg:border-r lg:pr-4 lg:border-lightgray">
            <h4 className="text-primary font-semibold text-xl sm:text-2xl">
              {percentile}%
            </h4>
            <p className="text-lightgray uppercase text-xs sm:text-sm">
              percentile
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#F4F6F8] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
            <Icon
              icon="noto:check-mark-button"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
          <div>
            <h4 className="text-primary font-semibold text-xl sm:text-2xl">
              {correctAnswers} / 15
            </h4>
            <p className="text-lightgray uppercase text-xs sm:text-sm">
              correct answers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
