
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
export default function Home() {
return (
<>
  <Auth />
  <AddTodo />
  <TodoList />
</>
);
}
