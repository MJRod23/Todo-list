import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
// h1 = todos

// div =
//   input
//   a list (ul)
//     list items of todos (li)
//        text (p, label, whatver)
//        a button to delete
const localStorageKey="ToDos_key"
const Home = () => {
	const [ToDos, setToDos] = useState(["a","b","c"]);
	const [previousTodos, setPreviousToDos]=useState(ToDos);

	// const[inputValue, setInputValue]=useState("");
	// setting state
	useEffect(()=>{
		// console.log("Run Once");
		// console.log(localStorage.getItem(localStorageKey));
		let localStorageToDos = JSON.parse(localStorage.getItem(localStorageKey));
		setToDos(localStorageToDos);
		setPreviousToDos(localStorageToDos);
		//JSON.parse -> makes it to w.e it was before
	},[]);

//below runs everytime items length changes, and saves in local storage
	useEffect(()=>{
		// console.log("everytime todo changes");
		// console.log(JSON.stringify(ToDos));
		localStorage.setItem(localStorageKey, JSON.stringify(ToDos));
	},[ToDos.length]);


//JSON.stringify(someObject) -> string form of that object

console.log(previousTodos);

	let onType= (event)=>{
		if(event.code=="Enter"){
			let newToDos= [...ToDos];
			newToDos.push(event.target.value);
			setToDos(newToDos);
			setPreviousToDos(ToDos)
			event.target.value = ""
			//event.target.value = "" is used to clear the input event.target.value = ""
		}
		else {
			// setInputValue(event.target.value);
			// console.log(inputValue);
		}
		console.log(event);
	}
	return (
		<div className="text-center">
			<h1>Todos </h1>
			<div>
				{/* if enter
				add todo
				refresh input
				else
				setInputvalue to new value */}
				<input onKeyUp={onType} placeholder="Enter Todo" />
				<ul>
					{ToDos.map (
					(todo, index)=>{
						return(<li key={index}>
							<p>{todo}</p>
							<button onClick={()=>{
								let newToDos= [...ToDos];
								newToDos.splice(index,1);
								setToDos(newToDos);
								setPreviousToDos(ToDos)
							}}>x</button>
							</li>)
					}
					)}
				</ul>
				
			</div>
			<p>
			Items {ToDos.length}
			<button onClick={()=>{
								let newToDos= [];
								setToDos(newToDos);
								setPreviousToDos(ToDos)
							}}>Erase todo</button>
			</p>
			<button onClick={()=>{
							setToDos(previousTodos);
							}}>Undo</button>
			
			
							
		</div>
	);
};

export default Home;

//Things left to-do
// Empty the input on enter
// Add placeholder to input
// Style todos
// Save todos across browser refreshgit

