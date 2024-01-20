import React, { useEffect } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Chart = ({ rerender }) => {
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

    if (data) {
      const parsedData = JSON.parse(data);

      parsedData.forEach((data) => {
        if (data.completed === true) {
          const month = data.taskDate.split("/");
          if (month[2] === "2024") {
            const index = month[1] - 1;
            setTaskData((prevData) => {
              const updatedData = [...prevData];
              updatedData[index] = {
                ...prevData[index],
                completedTask: prevData[index].completedTask + 1,
              };
              return updatedData;
            });
          }
        } else {
          const month = data.taskDate.split("/");
          if (month[2] === "2024") {
            const index = month[1] - 1;
            setTaskData((prevData) => {
              const updatedData = [...prevData];
              updatedData[index] = {
                ...prevData[index],
                pendingTask: prevData[index].pendingTask + 1,
              };
              return updatedData;
            });
          }
        }
      });
    }
  }, [rerender]);
  return (
    <ResponsiveContainer width="95%" aspect="2">
      <ComposedChart
        width={1000}
        height={700}
        data={taskData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completedTask" barSize={50} fill="#413ea0" />
        <Line type="monotone" dataKey="pendingTask" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
