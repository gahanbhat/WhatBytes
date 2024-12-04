import React from "react";
import { LinearProgress, Typography, Box, Grid } from "@mui/material";

const progressData = [
  { title: "HTML Tools, Forms, History", value: 80 },
  { title: "Tags & References in HTML", value: 60 },
  { title: "Tables & References in HTML", value: 24 },
  { title: "Tables & CSS Basics", value: 96 },
];

export default function ProgressBar() {
  return (
    <div>
      <Grid container spacing={2}>
        {progressData.map((item, index) => (
          <Grid item xs={6} key={index}>
            <div className="gap-2">
              <Typography
                variant="body1"
                gutterBottom
                className="text-slate-500"
              >
                {item.title}
              </Typography>
              <Box position="relative">
                <LinearProgress
                  variant="determinate"
                  value={item.value}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: getColor(item.value),
                    },
                  }}
                />
                <Box
                  position="absolute"
                  right={0}
                  top="-22px"
                  sx={{
                    color: getColor(item.value),
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {item.value}%
                </Box>
              </Box>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

// Function to determine the color based on the value
const getColor = (value) => {
  if (value >= 80) return "#4caf50"; // Green for 80% and above
  if (value >= 50) return "#ff9800"; // Orange for 50% to 79%
  return "#f44336"; // Red for below 50%
};
