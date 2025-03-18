"use client";

import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
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
      name: "0",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "25",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "50",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "75",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "100",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <div className="mt-8 lg:mt-16">
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
