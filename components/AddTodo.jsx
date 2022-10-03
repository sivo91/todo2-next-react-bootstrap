import React from "react";
import useAuth from "../hooks/useAuth";
import { addTodo } from "../api/todo";



const AddTodo = () => {
  const [title, setTitle] = React.useState("");
  const [time, setTime] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const [isLoading, setIsLoading] = React.useState(false);



  const { isLoggedIn, user } = useAuth();

  const handleTodoCreate = async () => {
    if (!isLoggedIn) {
     
      alert("You must be logged in to create a todo")
      return;
    }
    setIsLoading(true);
    const todo = {
      title,
      time,
      status,
      userId: user.uid,
    };
    await addTodo(todo);
    setIsLoading(false);

    setTitle("");
    setTime("");
  };

  return (
    <>
      <section className="container ">

        <label className='text-center mt-5'>
          <span>To-Do</span>
          <input type="text" 
                placeholder='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className='ms-3 px-2 py-1'  />
        </label>

        <label className='text-center mt-5 ms-5'>
          <span>Due</span>
          <input type="date" 
                value={time}
          onChange={(e) => setTime(e.target.value)}
                className='ms-3 px-2 py-1'  />
        </label>

        <button type="button" 
                className="btn btn-outline-primary ms-5 px-5"
                onClick={() => handleTodoCreate()}
                disabled={title.length < 1 || time.length < 1 || isLoading}

                >Add</button>
        
      </section>
    </>
  );
};

export default AddTodo;