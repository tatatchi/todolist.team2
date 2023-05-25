// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { useState } from "react";
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';


// export default function ColorTextField() {
//     const [inputText, setInputElement] = useState("");
//     const [text, setText] = useState("");

//     const [addTodo, setAddText] = useState("");
    
//     const onClickAddText = () => {
//         setAddText (text);
//         setText("");
//     }

//     const onClickDelete = () => {

//     }

//   return (
    
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField label="Todo" color="secondary" focused value={text} onChange={(e) => setText(e.target.value)} type="text"/>
//       <Button onClick={onClickAddText} variant="contained" endIcon={<SendIcon />}>
//         Send
//       </Button>
      
//       {/* <p>{text}</p> */}
//       {/* <div>
//       <p>{addTodo}</p>
//       <IconButton onClick={onClickDelete}>
//       <DeleteIcon />
//       </IconButton>
//       </div> */}
      
//     </Box>
//   );
// }

// //export default Delete;