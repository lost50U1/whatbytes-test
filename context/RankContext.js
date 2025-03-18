"use client";

import { createContext, useState } from "react";

export const RankContext = createContext();

export const RankProvider = ({ children }) => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);



  return (
    <RankContext.Provider
      value={{
        rank,
        percentile,
        score,
        setRank,
        setPercentile,
        setScore,
      }}
    >
      {children}
    </RankContext.Provider>
  );
};
