import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import CharacterCounter from "./RecoilStart/CharacterCounter";
import TodoList from "./RecoilTodoList/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
