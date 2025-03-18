"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const CircularChart = ({ correct, question }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const data = [
    { name: "Completed", value: correct },
    { name: "Remaining", value: question - correct },
  ];

  const COLORS = ["#3B7DF5", "#EAF2FE"]; // Blue and light blue

  return (
    <div className="mt-8 lg:mt-16 w-full h-[210px] flex items-center justify-center relative">
      <PieChart width={210} height={210}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={75}
          outerRadius={105}
          startAngle={0}
          endAngle={360}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl">🎯</span>
      </div>
    </div>
  );
};

export default CircularChart;
