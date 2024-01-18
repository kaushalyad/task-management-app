import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Chart = () => {
  const [chartData, setChartData] = React.useState([]);
  const [taskData, setTaskData] = React.useState([
    {
      month: "January",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "February",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "March",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "April",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "May",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "June",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "July",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "August",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "September",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "October",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "November",
      completedTask: 0,
      pendingTask: 0,
    },
    {
      month: "December",
      completedTask: 0,
      pendingTask: 0,
    },
  ]);

  useEffect(() => {
    const data = localStorage.getItem("to-do-data");
    console.log(data);
    setChartData(JSON.parse(data));
    chartData.map((data) => {
      if (data.completed === true) {
        const month = data.taskDate.split("/");
        if (month[2] === "2024") {
          const index = month[0] - 1;
          const updatedData = taskData;
          updatedData[index].completedTask += 1;
          setTaskData(updatedData);
        }
      } else {
        const month = data.taskDate.split("/");
        if (month[2] === "2024") {
          const index = month[0] - 1;
          const updatedData = taskData;
          updatedData[index].pendingTask += 1;
          setTaskData(updatedData);
        }
      }
    });
  }, []);

  return (
    <LineChart
      width={1050}
      height={400}
      data={taskData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="completedTask"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="pendingTask" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;
