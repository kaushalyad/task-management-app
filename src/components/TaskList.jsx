import TaskItem from "./TaskItem";
import { Box, Stack, VStack, Text } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
const TaskList = ({ tasks, onDelete, setTasks, onEdit }) => {
  const onDragEnd = (DropResult) => {
    const { source, destination } = DropResult;
    if (!destination || destination === undefined) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    let add, updatedTasks;
    updatedTasks = tasks;
    if (source.droppableId === "personal") {
      add = updatedTasks[source.index];
      updatedTasks.splice(source.index, 1);
    } else {
      add = updatedTasks[source.index];
      updatedTasks.splice(source.index, 1);
    }

    if (destination.droppableId === "personal") {
      updatedTasks.splice(destination.index, 0, add);
      if (updatedTasks[destination.index] !== undefined) {
        updatedTasks[destination.index].category = "Personal";
      }
    } else {
      updatedTasks.splice(destination.index, 0, add);
      if (updatedTasks[destination.index] !== undefined) {
        updatedTasks[destination.index].category = "Work";
      }
    }
    setTasks(updatedTasks);
    localStorage.setItem("to-do-data", JSON.stringify(updatedTasks));
  };
  return (
    <VStack>
      <Stack
        w="95%"
        m="auto"
        justifyContent="space-between"
        direction="row"
        spacing="5%"
        h="10%"
      >
        <Box
          fontSize="3xl"
          bg="orange"
          w="100%"
          className="rounded-md text-white text-center justify-center items-center"
        >
          <Text className="font-bold font-serif text-center justify-center justify-items-center my-auto" fontSize={["xl","3xl"]} paddingTop={["2px","0px"]}> Personal</Text>
        </Box>
        <Box
          fontSize="3xl"
          bg="orange"
          w="100%"
          className="rounded-md text-white"
        >
          <Text className="font-bold font-serif" fontSize={["xl","3xl"]} paddingTop={["2px","0px"]}> Work</Text>
        </Box>
      </Stack>

      <DragDropContext onDragEnd={onDragEnd}>
        <Stack direction="row" w="95%" spacing="5%" margin="auto">
          <Stack direction="col" w="47.5%">
            <Droppable droppableId="personal">
              {(provided, snapshot) => (
                <Box
                  className={` w-[100%] overflow-y-scroll min-h-0 max-h-[390px] ${
                    snapshot.isDraggingOver ? " bg-red-600" : " bg-red-700"
                  } `}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  key="drop-1"
                >
                  {tasks.map((task, index) => {
                    if (task.category === "Personal") {
                      return (
                        <TaskItem
                          key={task.taskId}
                          task={task}
                          tasks={tasks}
                          setTasks={setTasks}
                          index={index}
                          onEdit={onEdit}
                          onDelete={() => onDelete(task.taskId)}
                        />
                      );
                    }
                    return <></>;
                  })}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </Stack>
          <Stack direction="col" w="47.5%" minH="0px" maxHeight="390px">
            <Droppable droppableId="work">
              {(provided, snapshot) => (
                <Box
                  key="drop-2"
                  className={` w-[100%] overflow-y-scroll min-h-0 max-h-[390px] ${
                    snapshot.isDraggingOver ? " bg-red-600" : " bg-red-700"
                  } `}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasks.map((task, index) => {
                    if (task.category === "Work") {
                      return (
                        <TaskItem
                          key={task.taskId}
                          tasks={tasks}
                          setTasks={setTasks}
                          task={task}
                          index={index}
                          onEdit={onEdit}
                          onDelete={() => onDelete(task.taskId)}
                        />
                      );
                    }
                    return <></>;
                  })}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </Stack>
        </Stack>
      </DragDropContext>
    </VStack>
  );
};

export default TaskList;
