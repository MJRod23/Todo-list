async function getAllTodos(){
    await fetch('https://assets.breatheco.de/apis/fake/todos/user/majo', {
        method: "POST",
        //post is to create
        body: JSON.stringify([]),
        headers: {
          "Content-Type": "application/json"
        }
      });
    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/majo', {
        method: "GET",
        // get the actual data 
        // body: JSON.stringify(todos),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      console.log(data);
//{label: "todo here", done: falso}
// maps, maps only label here

      // return data.map((todoinfo) =>{
      //   return todoinfo.label
      // } )

return data;

}


async function updateTodos(updateTodos){
    // make the array an object 
    // let apitodos = updateTodos.map((todoitem)=>{
    //     return{
    //         label: todoitem,
    //         done: false 

    //     }
    // // })
    // console.log(JSON.stringify(apitodos))
   const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/majo', {
        method: "PUT",
        //post is to create
        body: JSON.stringify(updateTodos),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response);
}

export{getAllTodos,updateTodos}