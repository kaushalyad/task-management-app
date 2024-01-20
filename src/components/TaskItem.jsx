import { Stack, Checkbox, Button, Box, HStack } from "@chakra-ui/react";
import ModalComponentForEdit from "./ModalComponentForEdit";
import { useDisclosure } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Draggable } from "react-beautiful-dnd";
const TaskItem = ({ task, onDelete, index, setTasks, tasks, onEdit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Draggable
      draggableId={task.taskId.toString()}
      index={index}
      key={task.taskId.toString()}
    >
      {(provided, snapshot) => (
        <HStack
          w="95%"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          margin="auto"
          spacing="5%"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Box
            w="100%"
            marginTop="10px"
            marginBottom="10px"
            padding="10px 10px 10px 10px"
            className={`rounded-md ${
              snapshot.isDragging ? "bg-green-600" : "bg-green-400"
            }`}
          >
            <Stack justifyContent="space-between" direction="row" w="100%">
              <Stack spacing={5} direction="row">
                <Checkbox
                  onChange={(e) => {
                    const index = tasks.findIndex(
                      (val) => val.taskId === task.taskId
                    );
                    const updatedTasks = tasks.slice();
                    updatedTasks[index]["completed"] = e.target.checked;
                    // console.log(updatedTasks[index]['completed'])
                    localStorage.setItem(
                      "to-do-data",
                      JSON.stringify(updatedTasks)
                    );
                    setTasks(updatedTasks);
                    // console.log(task)
                  }}
                  isChecked={task.completed}
                />
                <Box className="min-[0px] max-[720px]:text-sm text-xl">
                  <Box
                    ml="1px"
                    w="100%"
                    maxW=" "
                    textColor="black"
                    className={` "min-[480px] max-[720px]:text-xs min-[480px] max-[720px]:max-w-[50px] min-[0px] max-[479px]:text-[8px]  min-[0px] max-[479px]:max-w-[30px]  max-w-[150px] "    ${
                      task.completed ? " line-through" : " no-underline"
                    }`}
                  >
                    {task.taskName}
                  </Box>
                  <Box className=" text-[10px] min-[0px] max-[479px]:text-[6px]  min-[0px] max-[479px]:max-w-[30px]">
                    {task.taskDate.toString()}
                  </Box>
                </Box>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Button onClick={onOpen} className="min-[0px] max-[720px]:w-0">
                  <EditIcon />
                  <ModalComponentForEdit
                    onClose={onClose}
                    onOpen={onOpen}
                    isOpen={isOpen}
                    task={task}
                    tasks={tasks}
                    onEdit={onEdit}
                    setTasks={setTasks}
                  />
                </Button>
                <Button
                  onClick={onDelete}
                  className="min-[0px] max-[720px]:w-0 min-[0px] max-[720px]:h-3  "
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </Stack>
          </Box>
        </HStack>
      )}
    </Draggable>
  );
};

export default TaskItem;
