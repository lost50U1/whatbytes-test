import React from "react";
import { syllabusData } from "@/data";

export default function SyllabusAnalysis() {
  return (
    <div className="card">
      <h3 className="card-title">Syllabus Wise Analysis</h3>
      <div className="mt-4 lg:mt-7 space-y-12">
        {/* syllabus list  */}
        {syllabusData.map((skill) => (
          <div key={skill.id}>
            <h4 className="text-secondary font-medium">{skill.name}</h4>
            <div className="flex items-center">
              <div
                className={`w-full ${
                  skill.id === 1
                    ? "bg-[#EAF2FE]"
                    : skill.id === 2
                    ? "bg-[#FEF1EB]"
                    : skill.id === 3
                    ? "bg-[#FEECEC]"
                    : "bg-[#E6F9EE]"
                } rounded-full h-2.5`}
              >
                <div
                  className={`${
                    skill.id === 1
                      ? "bg-[#3B7DF5]"
                      : skill.id === 2
                      ? "bg-[#FF8439]"
                      : skill.id === 3
                      ? "bg-[#FA5353]"
                      : "bg-[#29C165]"
                  } h-2.5 rounded-full`}
                  style={{ width: `${(skill.correct / skill.total) * 100}%` }}
                ></div>
              </div>
              <span
                className={`ml-8 font-semibold text-sm md:text-lg ${
                  skill.id === 1
                    ? "text-[#3B7DF5]"
                    : skill.id === 2
                    ? "text-[#FF8439]"
                    : skill.id === 3
                    ? "text-[#FA5353]"
                    : "text-[#29C165]"
                }`}
              >
                {((skill.correct / skill.total) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
