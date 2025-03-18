"use client";

import { htmlLogo } from "@/utils";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Modal from "./ui/Modal";
import { Icon } from "@iconify/react";
import { RankContext } from "@/context/RankContext";

export default function SkillList() {
  const { rank, percentile, score, setRank, setPercentile, setScore } =
    useContext(RankContext);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setErrors({ rank: "", percentile: "", score: "" });
  };

  const validateInput = (value, field) => {
    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [field]:
          field === "rank"
            ? "Required | Should be a number"
            : field === "percentile"
            ? "Required | Percentile 0 - 100"
            : "Required | Score 0 - 15",
      }));
      return false;
    }

    if (isNaN(value)) {
      setErrors((prev) => ({
        ...prev,
        [field]:
          field === "rank"
            ? "Required | Should be a number"
            : field === "percentile"
            ? "Required | Percentile 0 - 100"
            : "Required | Score 0 - 15",
      }));
      return false;
    }

    // Additional range validations for percentile and score
    if (field === "percentile") {
      const percentileValue = Number(value);
      if (percentileValue < 0 || percentileValue > 100) {
        setErrors((prev) => ({
          ...prev,
          percentile: "Required | Percentile 0 - 100",
        }));
        return false;
      }
    }

    if (field === "score") {
      const scoreValue = Number(value);
      if (scoreValue < 0 || scoreValue > 15) {
        setErrors((prev) => ({
          ...prev,
          score: "Required | Score 0 - 15",
        }));
        return false;
      }
    }

    setErrors((prev) => ({ ...prev, [field]: "" }));
    return true;
  };

  const handleInputChange = (e, field, setter) => {
    const value = e.target.value;
    setter(value);
    validateInput(value, field);
  };

  const handleSave = () => {
    const isRankValid = validateInput(rank, "rank");
    const isPercentileValid = validateInput(percentile, "percentile");
    const isScoreValid = validateInput(score, "score");

    if (isRankValid && isPercentileValid && isScoreValid) {
      setRank(rank);
      setPercentile(percentile);
      setScore(score);
      setIsOpen(false);
      setErrors({ rank: "", percentile: "", score: "" });
    }
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center gap-4">
        <Image src={htmlLogo} alt="html logo" width={53} height={76} />
        <div>
          <h3 className="text-primary font-bold text-lg">
            Hyper Text Markup Language
          </h3>
          <p className="font-semibold">
            Question: 08 | Duration: 15 min | Submitted on 5 Feb 2025
          </p>
        </div>
        <button onClick={handleOpenModal} className="blue-button">
          Update
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="flex flex-col gap-4 mt-4 lg:mt-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
              <div className="flex items-center gap-4">
                <div className="bg-darkblue rounded-full w-8 h-8 text-white font-bold text-2xl flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-primary font-medium text-lg">
                    Update Your <span className="font-bold">Rank</span>
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-auto">
                <input
                  type="text"
                  value={rank}
                  onChange={(e) => handleInputChange(e, "rank", setRank)}
                  className={`border ${
                    errors.rank ? "border-red-500" : "border-tertiary"
                  } rounded-lg p-2 w-full sm:w-auto text-primary font-semibold placeholder:text-primary/65`}
                  placeholder="Rank"
                />
                {errors.rank && (
                  <span className="text-red-500 text-sm">{errors.rank}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
              <div className="flex items-center gap-4">
                <div className="bg-darkblue rounded-full w-8 h-8 text-white font-bold text-2xl flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-primary font-medium text-lg">
                    Update Your <span className="font-bold">Percentile</span>
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-auto">
                <input
                  type="text"
                  value={percentile}
                  onChange={(e) =>
                    handleInputChange(e, "percentile", setPercentile)
                  }
                  className={`border ${
                    errors.percentile ? "border-red-500" : "border-tertiary"
                  } rounded-lg p-2 w-full sm:w-auto text-primary font-semibold placeholder:text-primary/65`}
                  placeholder="Percentile"
                />
                {errors.percentile && (
                  <span className="text-red-500 text-sm">
                    {errors.percentile}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
              <div className="flex items-center gap-4">
                <div className="bg-darkblue rounded-full w-8 h-8 text-white font-bold text-2xl flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-primary font-medium text-lg">
                    Update Your{" "}
                    <span className="font-bold">Current Score(out of 15)</span>
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-auto">
                <input
                  type="text"
                  value={score}
                  onChange={(e) => handleInputChange(e, "score", setScore)}
                  className={`border ${
                    errors.score ? "border-red-500" : "border-tertiary"
                  } rounded-lg p-2 w-full sm:w-auto text-primary font-semibold placeholder:text-primary/65`}
                  placeholder="Score"
                />
                {errors.score && (
                  <span className="text-red-500 text-sm">{errors.score}</span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-8">
            <button
              onClick={handleCloseModal}
              className="text-[#132278] font-semibold text-sm px-6 py-3 rounded-md border-2 border-[#132278] hover:bg-[#132278] hover:text-white transition-all duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="blue-button flex items-center gap-2"
            >
              Save <Icon icon="grommet-icons:link-next" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
