import React, { useState } from "react";
import { Input, Box, Button, Stack, Select, VStack } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import ModalComponentForChart from "./ModalComponentForChart";
import DateFormatter from "./methods/DateFormatter";
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
        taskDate: DateFormatter(date),
        category: category,
      });
      setInputValue("");
    }
  };
  return (
    <Box marginTop="25px" className="mb-5">
      <Stack direction="row" justifyContent={['start','center']} ml={['40px','auto']} p={['0px','inherit']}>
        <VStack w={["53%", "65%"]} justify='start'>
          <Input
            minW={'240px'}
            size={['sm','md']}
            placeholder="Enter Your Task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Stack spacing={2} direction="row" marginTop="10px" w="100%" mr={['70px','auto']} ml={['10px']} >
            <Select
              minW='125px'
             
              onClick={(e) => {
                setCategory(e.target.value);
              }}
              size={['sm','md']}
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
            <Box minW='120px' >
              <SingleDatepicker
                name="date-input"
                date={date}
                onDateChange={setDate}
                withPortal={true}
                inline
                daySize={1}
              />
            </Box>
            <Box>
              <ModalComponentForChart />
            </Box>
          </Stack>
        </VStack>
        <Button onClick={addTask} colorScheme="blue" marginLeft={['40px','20px']} size={['sm','md']}  >
          Add Task
        </Button>
      </Stack>
    </Box>
  );
};

export default TaskForm;
