import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  Input,
  Select,
  Box,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";
import DateFormatter from "./methods/DateFormatter";
function ModalComponentForEdit({ isOpen, tasks, onClose, task, onEdit }) {
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState(task.category);
  const [completed, setCompleted] = useState(false);
  const updateTask = (task, date) => {
    if (inputValue.length >= 0) {
      onEdit(
        {
          taskName: inputValue,
          completed: completed,
          taskId: task.taskId,
          taskDate: DateFormatter(date),
          category: category,
        },
        task.taskId
      );
    }
  };
  // console.log(task.completed);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered="true">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Input
              margin="auto"
              marginTop="10px"
              placeholder="Edit Your Task"
              defaultValue={task.taskName}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <HStack>
              <Select
                w="150px"
                marginTop="10px"
                defaultValue={task.category}
                onClick={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Wishlist" disabled>
                  Wishlist
                </option>
                <option value="Birthday" disabled>
                  Birthday
                </option>
              </Select>
              <Box w="150px" marginTop="10px">
                <SingleDatepicker
                  name="date-input"
                  date={date}
                  onDateChange={setDate}
                />
              </Box>
              <Box justifyContent="center" alignItems="center" marginTop="13px">
                {task.completed ? (
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setCompleted(true)
                        : setCompleted(false);
                    }}
                    defaultChecked
                  />
                ) : (
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setCompleted(true)
                        : setCompleted(false);
                    }}
                  />
                )}
              </Box>
              <Box>
                <label>Done</label>
              </Box>
            </HStack>
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="whatsapp"
              onClick={() => {
                updateTask(task, date);
                onClose();
              }}
            >
              Update Task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponentForEdit;
