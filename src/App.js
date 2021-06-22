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
import Parent from "./Componenttest/Parent";

function App() {
  return (
    <RecoilRoot>
      {/* <Parent /> */}
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
