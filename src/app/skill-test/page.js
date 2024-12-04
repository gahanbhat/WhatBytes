"use client"; // Make sure to add this for client-side rendering

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import BasicLineChart from "../components/Graph";
import SyllabusWiseAnalysis from "../components/Syllabus";
import PieChart from "../components/Pie";

export default function SkillTest() {
  const [open, setOpen] = React.useState(false);

  // Open and close Dialog
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // State for displayed rank, percentile, and score
  const [rank, setRank] = React.useState("1");
  const [percentile, setPercentile] = React.useState("95");
  const [score, setScore] = React.useState("8");

  // States for input values
  const [rankInput, setRankInput] = React.useState("");
  const [percentileInput, setPercentileInput] = React.useState("");
  const [scoreInput, setScoreInput] = React.useState("");

  // Handle input changes for rank, percentile, and score
  const handleRankInputChange = (event) => setRankInput(event.target.value);
  const handlePercentileInputChange = (event) =>
    setPercentileInput(event.target.value);
  const handleScoreInputChange = (event) => {
    let value = event.target.value;
    // Allow the input if it's a valid number within the range 0-15
    if (/^\d*$/.test(value) && (value === "" || parseInt(value) <= 15)) {
      setScoreInput(value);
    }
  };

  // Handle Save button click
  const handleSave = () => {
    // Check if all inputs are filled
    if (rankInput && percentileInput && scoreInput) {
      // Update the state with input values
      setRank(rankInput);
      setPercentile(percentileInput);
      setScore(scoreInput);
      handleClose(); // Close the dialog
    } else {
      // Optionally show an error or alert if some fields are missing
      alert("Please fill in all fields before saving.");
    }
  };

  return (
    <div className="p-8">
      <div className="relative flex text-2xl justify-start text-slate-700">
        <h1>Skill Test</h1>
      </div>

      {/* Skill Test Card */}
      <div className="mt-8">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center">
                  <img src="/html-logo.png" alt="html" className="w-20 h-20" />
                </div>

                <div className="flex-grow text-center font-bold text-2xl">
                  Hyper Text Markup Language
                  <div className="flex text-center justify-center font-light text-xl text-slate-500 p-2">
                    Questions:8 | Duration:10 min | Submitted on 12/04/2024
                  </div>
                </div>

                <div className="flex justify-end hover:scale-105 duration-500">
                  <Button
                    size="large"
                    className="bg-blue-900 text-white font-bold text-md px-4 py-2"
                    onClick={handleClickOpen}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>

      {/* Card for Quick Statistics */}
      <div className="mt-8">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <div className="flex items-start font-bold text-2xl mb-4">
                Quick Statistics
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-row items-center justify-center gap-6 border-r-2">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex justify-center items-center">
                    <img
                      src="/rank.png"
                      alt="circle image"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-center flex flex-col items-start">
                    <div className="text-2xl font-bold">{rank}</div>
                    <div className="font-light text-xl text-slate-500">
                      Your Rank
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center gap-6 border-r-2">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex justify-center items-center">
                    <img
                      src="/percentile.png"
                      alt="circle image"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-center flex flex-col items-start">
                    <div className="text-2xl font-bold">{percentile}%</div>
                    <div className="font-light text-xl text-slate-500">
                      Percentile
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center gap-6">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex justify-center items-center">
                    <img
                      src="/correct.png"
                      alt="circle image"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-center flex flex-col items-start">
                    <div className="text-2xl font-bold">{score}</div>
                    <div className="font-light text-xl text-slate-500">
                      Correct Answers
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>

      {/* Dialog for Form Submission */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-2xl font-bold m-4 p-4">
          Update Scores
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-4">
            {/* Rank input */}
            <div className="flex flex-row items-center p-2">
              <label
                htmlFor="rank"
                className="font-medium text-lg text-slate-700 w-full flex items-center"
              >
                <div className="w-10 h-10 bg-blue-900 rounded-full text-white flex justify-center items-center mr-6">
                  1
                </div>
                <span>
                  Update your <span className="font-bold">Rank</span>
                </span>
              </label>
              <input
                required
                id="rank"
                name="rank"
                type="text"
                value={rankInput} // Bind to the rank input state
                onChange={handleRankInputChange} // Update the rank input state
                pattern="\d*"
                inputMode="numeric"
                className="border-2 border-slate-300 rounded-md p-2 w-1/3 mt-1"
              />
            </div>

            {/* Percentile input */}
            <div className="flex flex-row items-center p-2">
              <label
                htmlFor="percentile"
                className="font-medium text-lg text-slate-700 w-full flex items-center"
              >
                <div className="w-10 h-10 bg-blue-900 rounded-full text-white flex justify-center items-center mr-6">
                  2
                </div>
                <span>
                  Update your <span className="font-bold">Percentile</span>
                </span>
              </label>
              <input
                required
                id="percentile"
                name="percentile"
                type="text"
                value={percentileInput} // Bind to the percentile input state
                onChange={handlePercentileInputChange} // Update the percentile input state
                pattern="\d*"
                inputMode="numeric"
                className="border-2 border-slate-300 rounded-md p-2 w-1/3 mt-1"
              />
            </div>

            {/* Score input */}
            <div className="flex flex-row items-center p-2">
              <label
                htmlFor="score"
                className="font-medium text-lg text-slate-700 w-full flex items-center"
              >
                <div className="w-10 h-10 bg-blue-900 rounded-full text-white flex justify-center items-center mr-6">
                  3
                </div>
                <span>
                  Update your{" "}
                  <span className="font-bold">Current Score (out of 15)</span>
                </span>
              </label>
              <input
                required
                id="score"
                name="score"
                type="text"
                value={scoreInput} // Bind to the score input state
                onChange={handleScoreInputChange} // Update the score input state
                className="border-2 border-slate-300 rounded-md p-2 w-1/3 mt-1"
              />
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} className="bg-red-500 text-white m-4">
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-blue-900 text-white m-4"
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Comparison Graph */}
      <div className="mt-8">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <div className="flex items-start font-bold text-2xl">
                Comparison Graph
              </div>
              <div className="flex flex-col items-center justify-center">
                <BasicLineChart percentile={percentile} />
                <p className="text-center text-slate-500">
                  You scored <strong>{percentile}% percentile</strong>, which is
                  lower than the average percentile of <strong>72%</strong> of
                  all engineers who took this assessment.
                </p>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>

      {/* Syllabus Wise Analysis */}
      <div className="mt-8">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <div className="flex items-start font-bold text-2xl">
                Syllabus Wise Analysis
              </div>
              <div className="flex flex-col items-center justify-center">
                <SyllabusWiseAnalysis />
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>

      {/* Question Analysis */}
      <div className="mt-8">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <div className="flex items-start font-bold text-2xl">
                Question Analysis
              </div>
              <div className="flex items-start text-slate-500  text-xl py-2">
                <span>
                  You scored{" "}
                  <span className="font-bold">
                    {score} questions correct out of 15.{" "}
                  </span>
                  {parseInt(score) < 15 && (
                    <span className="font-medium text-slate-500">
                      {" "}
                      However it still needs improvement.
                    </span>
                  )}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <PieChart correctAnswers={score} />
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
}
