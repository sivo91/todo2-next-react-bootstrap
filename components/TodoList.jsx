

import React, { useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { deleteTodo, toggleTodoStatus } from "../api/todo";


const TodoList = () => {
  const [todos, setTodos] = React.useState([]);

  const { user } = useAuth();
  //const toast = useToast();
  const refreshData = () => {
    if (!user) {
      setTodos([]);
      return;
    }
    const q = query(collection(db, "todo"), where("user", "==", user.uid));

    onSnapshot(q, (querySnapchot) => {
      let ar = [];
      querySnapchot.docs.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      setTodos(ar);
    });
  };

  useEffect(() => {
    refreshData();
  }, [user]);

  const handleTodoDelete = async (id) => {
    if (confirm("Are you sure you wanna delete this todo?")) {
      deleteTodo(id);
     /*  toast({ title: "Todo deleted successfully", status: "success" }); */
    }
  };

  const handleToggle = async (id, status) => {
    const newStatus = status == "completed" ? "pending" : "completed";
    await toggleTodoStatus({ docId: id, status: newStatus });
    /* toast({
      title: `Todo marked ${newStatus}`,
      status: newStatus == "completed" ? "success" : "warning",
    }); */
  };

  return (
    <div className="container">

    {
      todos && 
      todos.map(todo => (
         <div className="card" key={todo.id}>
            <div className="card-body">
              <button type="button" className="btn btn-primary position-relative">
                Due
                <span className="position-absolute top-0 mt-1 ms-5 date start-100 translate-middle badge rounded-pill bg-danger">
                  {todo.time}
                </span>
              </button>
              <h4><span className="badge bg-light text-dark me-3">To-Do :</span>{todo.title}</h4>
              <p className="garbage" 
                 onClick={() => handleTodoDelete(todo.id)}>
                   <FaRegTrashAlt/></p>
            </div>
          </div>
      ))
    }
     

      <style jsx>{`

       .container {
        position:relative;
        margin-top:50px;
        width:80%;
        
        display:flex;
        flex-wrap:wrap;
        padding: 20px;
       }

       .date {
        font-size:17px;
       }

       .bg {
        background-color: #f5f5f5;
       }

       .card  {
        position:relative;
        width: 350px;
        margin:10px;
        box-shadow :1px 1px 20px gray;
       }

       .card:hover {
        box-shadow: none;
       }

       .garbage {
        position: absolute;
        top: 5px;
        left:80%;
        font-size:30px;
        cursor:pointer;
       }

       .garbage:hover {
        color:red;
        transform: scale(1.2);
       }
      `}</style>
     
    </div>
  );
};

export default TodoList;