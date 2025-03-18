"use client";

import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ComparisionChart({ percentage, averatePercent }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const data = [
    {
      percentile: 0,
      numberOfStudent: 2,
    },
    {
      percentile: 25,
      numberOfStudent: 1,
    },
    {
      percentile: 50,
      numberOfStudent: 6,
    },
    {
      percentile: 75,
      numberOfStudent: 8,
    },
    {
      percentile: 100,
      numberOfStudent: 4,
    },
  ];

  return (
    <div className="mt-8 lg:mt-16 w-full overflow-x-auto">
      <div className="min-w-[730px]">
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="percentile"
            type="number"
            domain={[0, 100]}
            tick={{ fill: "#171717" }}
            tickLine={{ stroke: "#171717" }}
            label={{
              value: "Percentage (%)",
              position: "bottom",
              offset: 0,
              fill: "#171717",
            }}
          />
          <YAxis
            tick={{ fill: "#171717" }}
            tickLine={{ stroke: "#171717" }}
            label={{
              value: "Number of Students",
              angle: -90,
              position: "insideLeft",
              fill: "#171717",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #132278",
              borderRadius: "8px",
            }}
            formatter={(value, name) => [
              value,
              name === "numberOfStudent" ? "Number of Students" : name,
            ]}
            labelFormatter={(label) => `${label}`}
          />
          <Legend />
          <ReferenceLine
            x={Math.min(Math.max(percentage, 0), 100)}
            stroke="gray"
            label="Your Percentile"
          />
          <Line
            type="monotone"
            dataKey="numberOfStudent"
            stroke="#132278"
            strokeWidth={2}
            name="Number of Students"
            dot={{ fill: "#132278", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
}
