import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart({ percentile }) {
  return (
    <LineChart
      xAxis={[{ data: [14, 27, 44, 54, percentile] }]}
      series={[
        {
          data: [0, 25, 50, 75, percentile],
          showMark: ({ index }) => index == 4,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
