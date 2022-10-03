import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

// add item
const addTodo = async ({ userId, title, time, status }) => {
  try {
    await addDoc(collection(db, "todo"), {
      user: userId,
      title: title,
      time: time,
      status: status,
      createdAt: new Date().getTime().toString(),
    });
  } catch (err) {}
};


const toggleTodoStatus = async ({ docId, status }) => {
  try {
    const data = doc(db, "todo", docId);
    await updateDoc(data, {
      status,
    });
  } catch (err) {
    console.log(err);
  }
};

// delete item
const deleteTodo = async (docId) => {
  try {
    const data = doc(db, "todo", docId);
    await deleteDoc(data);
  } catch (err) {
    console.log(err);
  }
};


export { addTodo, toggleTodoStatus, deleteTodo };