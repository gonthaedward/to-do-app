import { useState } from 'react'
import Header from './Header'


function Todo() {  

  // handling form input
  const [value,setValue] = useState("");

  // handling CRUD todo
  const [todos,setTodos] = useState([]);

  //add
  const addTodo = (text) =>{
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
  };

  //update

  const updateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }

  //remove

  const removeTodo = (index) =>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
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
    <div className='ml-8'>
      <form onSubmit={handleSubmit}>
          <label className='text-white'>Task:</label>
          <input 
          type='text' 
          className='ml-7 bg-white input'
          value ={value}
          size={25}
          placeholder=' Input task and press enter.'
          onChange={(e) => setValue(e.target.value)}>
          </input><br></br><br></br>
          <label id="error" className='hidden text-red-600'>Value cannot be blank</label>
      </form>

      {/* Render data from Form  */}
        {todos.map((todo,index) =><li className={`text-white list-decimal mb-1 ${todo.isComplete ? 'line-through' : ''}`}>
            {todo.text}
            <button className={`ml-5 border border-solid ${todo.isComplete? 'hidden' : ''}`} onClick={() => updateTodo(index)}>Complete</button>
            <button className={`ml-5 border border-solid`} onClick={() => removeTodo(index)}>Remove</button>
        </li>
      )}
    </div>
    
    </>
  )
}

export default Todo

