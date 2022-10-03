
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
export default function Home() {
return (
<>
  <h2 className="text-center mt-5 fst-italic text-danger fs-1">
     <span className="text-primary">React</span>+
     <span className="text-secondary">Next</span>+
     <span className="text-warning">Firebase</span>
   </h2>
  <Auth />
  <AddTodo />
  <TodoList />
</>
);
}
