import * as React from "react";
import TodoList from "../stores/TodoList";
import TodoListView from "../components/TodoListView";
import Todo from "../stores/Todo";
// require ("./TodoList.less");

const store = new TodoList();
store.todos.push(
    new Todo("Get Coffee"),
    new Todo("Write simpler code")
);
store.todos[0].finished = true;

export default () => {
    return (<TodoListView todoList={store}/>)
}