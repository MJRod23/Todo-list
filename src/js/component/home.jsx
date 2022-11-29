import React, { useEffect, useState } from "react";
import { getAllTodos, updateTodos } from "../todomodel";

//create your first component
// h1 = todos

// div =
//   input
//   a list (ul)
//     list items of todos (li)
//        text (p, label, whatver)
//        a button to delete
const localStorageKey = "ToDos_key";
const Home = () => {
  const [ToDos, setToDos] = useState([]);
  const [previousTodos, setPreviousToDos] = useState(ToDos);

  // const[inputValue, setInputValue]=useState("");
  // setting state
  useEffect(async () => {
    // console.log("Run Once");
    // console.log(localStorage.getItem(localStorageKey));
    // let localStorageToDos = JSON.parse(localStorage.getItem(localStorageKey));
    // setToDos(localStorageToDos);
    // setPreviousToDos(localStorageToDos);
    let apiTodos = await getAllTodos();
    setToDos(apiTodos);
    setPreviousToDos(apiTodos);
    //JSON.parse -> makes it to w.e it was before
  }, []);

  //below runs everytime items length changes, and saves in local storage
  useEffect(() => {
    // console.log("everytime todo changes");
    // console.log(JSON.stringify(ToDos));
    // localStorage.setItem(localStorageKey, JSON.stringify(ToDos));
    updateTodos(ToDos);
  }, [ToDos]);

  //JSON.stringify(someObject) -> string form of that object

  console.log(previousTodos);

  let onType = (event) => {
    if (event.code == "Enter") {
      let newToDos = [...ToDos];
      newToDos.push({ label: event.target.value, done: true });
      setToDos(newToDos);
      setPreviousToDos(ToDos);
      event.target.value = "";
      //event.target.value = "" is used to clear the input event.target.value = ""
    } else {
      // setInputValue(event.target.value);
      // console.log(inputValue);
    }
    console.log(event);
  };
  return (
    <div className="todo-container">
      <h1 className="todo-title">Todos </h1>
      <div className="todo-input-container">
        {/* if enter
				add todo
				refresh input
				else
				setInputvalue to new value */}
        <input
          className="todo-input"
          onKeyUp={onType}
          placeholder="Enter Todo"
        />
      </div>
      <ul className="todo-ul">
        {ToDos.map((todo, index) => {
          console.log("inside map");
          console.log(todo);
          return (
            <li className="todo-item" key={index}>
              <input
                className="todo-checkbox"
                type="checkbox"
                checked={todo.done}
                onChange={() => {
                  let newToDos = [...ToDos];
                  newToDos[index].done = !todo.done;
                  setToDos(newToDos);
                  setPreviousToDos(ToDos);
                }}
              />

              <p className="todo-label">{todo.label}</p>
              {/* <p>{todo.done + ""}</p> */}
              {/* object now */}
              <button
                className="todo-delete-item"
                onClick={() => {
                  let newToDos = [...ToDos];
                  newToDos.splice(index, 1);
                  setToDos(newToDos);
                  setPreviousToDos(ToDos);
                }}
              >
                🗑️
              </button>
            </li>
          );
        })}
      </ul>

      <div className="todo-footer">

        <p className="todo-item-left">
          
          {ToDos.length} Items left  </p>

		
		<button className="todo-undo-button"
          onClick={() => {
            setToDos(previousTodos);
          }}
        >
          Undo
        </button>

        <button className="todo-clearall-button"
          onClick={() => {
            let newToDos = [];
            setToDos(newToDos);
            setPreviousToDos(ToDos);
          }}
        >
          Clear All
        </button>

       
      </div>
    </div>
  );
};

export default Home;

//Things left to-do
// Empty the input on enter
// Add placeholder to input
// Style todos
// Save todos across browser refreshgit
