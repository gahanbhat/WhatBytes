import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function TwoSimplePieChart({ correctAnswers }) {
  // Assuming correctAnswers and totalQuestions are dynamic values
  // Example: Correct answers
  const totalQuestions = 15; // Example: Total questions

  // Data for the pie chart (correct vs incorrect)
  const data = [
    { label: "Correct", value: correctAnswers, color: "green" },
    { label: "Incorrect", value: 15 - correctAnswers, color: "red" },
  ];

  return (
    <div>
      <PieChart
        series={[
          {
            data: data,
            cx: 150, // Center of the pie chart (horizontal)
            cy: 150, // Center of the pie chart (vertical)
            innerRadius: 60,
            outerRadius: 120,
          },
        ]}
        height={300}
        width={400}
        className="flex flex-col items-center justify-center"
        slotProps={{
          legend: { hidden: true }, // Hide the legend
        }}
      />
    </div>
  );
}
