import React, { useState } from "react";
import { Input, Box, Button, Stack, Select, VStack } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import ModalComponentForChart from "./ModalComponentForChart";
const TaskForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("Work");
  const addTask = () => {
    if (inputValue.length > 0) {
      onAddTask({
        taskName: inputValue,
        completed: false,
        taskId: Date.now(),
        taskDate: date.toLocaleDateString(),
        category: category,
      });
      setInputValue("");
    }
  };
  return (
    <Box marginTop="25px" className="mb-5">
      <Stack direction="row" justifyContent="center">
        <VStack w="65%">
          <Input
            placeholder="Enter Your Task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Stack spacing={2} direction="row" marginTop="10px" w="100%">
            <Select
              w="150px"
              onClick={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="Work">No Category</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Wishlist" disabled>
                Wishlist
              </option>
              <option value="Birthday" disabled>
                Birthday
              </option>
            </Select>
            <Box w="150px">
              <SingleDatepicker
                name="date-input"
                date={date}
                onDateChange={setDate}
              />
            </Box>
            <Box>
               <ModalComponentForChart />
            </Box>
          </Stack>
        </VStack>
        <Button onClick={addTask} colorScheme="blue" marginLeft="20px">
          Add Task
        </Button>
      </Stack>
    </Box>
  );
};

export default TaskForm;
