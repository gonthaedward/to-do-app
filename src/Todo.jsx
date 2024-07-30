import { useState } from 'react'
import Header from './Header'


function Todo() {  

  // handling form input
  const [value,setValue] = useState("");

  // handling CRUD todo
  const [todos,setTodos] = useState([
    {text:"Tidur", isComplete: false}
  ]);

  //add
  const addTodo = (text) =>{
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
  };

  //update

  const updateTodo = (index) => {
    const newTodos = [...todos];
    if(newTodos[index].isComplete == true)
    {
      newTodos[index].isComplete=false;
    }
    else{
      newTodos[index].isComplete=true;
    }
  }


  
  // handling error message
  var error = document.getElementById("error");

  //handling form submit
  const handleSubmit = (e) =>{
    e.preventDefault(); 
    if(!value) {
      error.classList.remove("hidden");
      return;
    }
    error.classList.add("hidden");
    addTodo(value); 
    setValue("");
  }

  return (
    <>
    {/* Form to Insert */}
    <form onSubmit={handleSubmit}>
        <label className='text-white'>Task:</label>
        <input 
        type='text' 
        className='ml-7 bg-white input'
        value ={value}
        onChange={(e) => setValue(e.target.value)}>
        </input><br></br><br></br>
        <label id="error" className='hidden text-red-600'>Value cannot be blank</label>
    </form>

    {/* Render data from Form  */}
      {todos.map((todo, ) =><li className={`text-white list-decimal ${todo.isComplete ? 'line-through' : ''}`}>
          {todo.text}<button className="ml-5 border border-solid" onClick={() => updateTodo(index)}>Complete</button>
      </li>
    )}
    </>
  )
}

export default Todo

