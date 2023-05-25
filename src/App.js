import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect  } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// function Todo() {
//   return (
//     <div className="Todo">
//       <header>
//         <h3>Tdolist</h3>
//       </header>
//       <main>
//         <p>Good Morning!</p>
//       </main>
//     </div>
//   )
// }
// //const [inputText, setInputElement] = useState("");
//     //const [text, setText] = useState("");

//    // const [addTodo, setAddText] = useState("");
    
//     const onClickAddText = () => {
//         setAddText (text);
//         setText("");
//     }

//     const onClickDelete = () => {

//     }

//グローバル
const todos = [
  {id: 1, name: "Learn Javascript"},
  {id: 5, name: "Learn React!!!!"}
]

//スコープ
const FetchData = (setData) => {
  useEffect(() => {
    fetch("https://todolist-team2.deno.dev/api/todo")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert("error"));
  }, []);
}



function App() {
  const [data, setData] = useState([]);
  FetchData(setData)//実行
  
  

  return (
    <div className="App">
      <h3>Todo</h3>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Todo" color="secondary"   type="text"/>
      <Button  variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
    


      <ul>
        {data.map(todo => <li><input type="checkbox"></input>{todo.name} <IconButton>
      <DeleteIcon />
      </IconButton></li>)}
      </ul> 
    </div>
  );
}



export default App;
