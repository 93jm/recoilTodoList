import { useRecoilValue } from "recoil";
import { todoListState } from "../Recoil/atom";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
import { filteredTodoListState } from "../Recoil/selector";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
