import React, {useState,useContext,useEffect} from 'react';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';

// const Todos = props =>{

//     return(
//         <div>
//             <br/>
//             <form>
//                 <label htmlFor="todo">Enter Todo</label>
//                 <input type="text" 
//                        name="todo" 
//                        className="form-control"
//                        placeholder="Please Enter Todo"/>
//                 <button className="btn btn-lg btn-primary btn-block" 
//                         type="submit">Submit</button>
//             </form>
           
//         </div>
//     );

// }

// export default Todos;

function Todos() {
    const [todos, setTodos] = useState(null);
    const [value, setValue] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
      const data = { name: value };
      console.log('submit');
      console.log(value);
      fetch('http://127.0.0.1:8000/api/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  
    function handleValue(e) {
      setValue(e.target.value);
    }
    return (
      <section id="app">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={handleValue} />
          <button> submit </button>
        </form>
      </section>
    );
  }
  export default Todos;
