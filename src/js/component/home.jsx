import React, { useState } from "react";

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
const Home = () => {
	const [ToDos, setToDos] = useState(["a","b","c"]);
	// const[inputValue, setInputValue]=useState("");
	// setting state
	return (
		<div className="text-center">
			<h1>Todos </h1>
			<div>
				{/* if enter
				add todo
				refresh input
				else
				setInputvalue to new value */}
				<input onKeyUp={(event)=>{
					if(event.code=="Enter"){
						let newToDos= [...ToDos];
						newToDos.push(event.target.value);
						setToDos(newToDos);
					}
					else {
						// setInputValue(event.target.value);
						// console.log(inputValue);
					}
					console.log(event);
				}}/>
				<ul>
					{ToDos.map(
					(todo, index)=>{
						return(<li>
							<p>{todo}</p>
							<button onClick={()=>{
								let newToDos= [...ToDos];
								newToDos.splice(index,1);
								setToDos(newToDos);
							}}>x</button>
							</li>)
					}
					)}
				</ul>
				
			</div>
			<p>
			{ToDos.length}
			</p>
		</div>
	);
};

export default Home;

//Things left to-do
// Empty the input on enter
// Add placeholder to input
// Style todos
// Save todos across browser refresh