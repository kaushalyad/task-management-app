import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
function ToDoList() {
  const [Tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem("to-do-data", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const editTask = (updatedTask, taskId) => {
    let index = Tasks.findIndex((el) => el.taskId === taskId);
    const updatedTasks = Tasks.slice();
    updatedTasks[index] = updatedTask;
    localStorage.setItem("to-do-data", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };
  const removeTask = (taskId) => {
    const updatedTasks = Tasks.filter((el) => el.taskId !== taskId);
    localStorage.setItem("to-do-data", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const storageData = localStorage.getItem("to-do-data");
    if (storageData !== null && storageData !== undefined) {
      setTasks(JSON.parse(storageData));
    }
  },[]);

  return (
    <Box>
      <TaskForm onAddTask={addTask} />
      <Box w="100%" margin="auto" className=" bg-slate-50">
        <TaskList
          tasks={Tasks}
          onDelete={removeTask}
          setTasks={setTasks}
          onEdit={editTask}
        />
      </Box>
    </Box>
  );
}

export default ToDoList;
