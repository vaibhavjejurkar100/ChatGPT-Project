// //Building Sidebar
// //Building ChatWindow

// import './App.css'
// import Sidebar from './Sidebar.jsx';
// import ChatWindow from './ChatWindow.jsx';
// import { MyContext } from './MyContext.jsx';

// function App() {
//   const providerValues = {}; //passing values

//   return (
//     <div className='app'>
//       <MyContext.Provider value={providerValues}>
//         <Sidebar></Sidebar>
//         <ChatWindow></ChatWindow>
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default App;


// //Functionality: Get Reply for Prompt
// //Adding Loader
// import './App.css'
// import Sidebar from './Sidebar.jsx';
// import ChatWindow from './ChatWindow.jsx';
// import { MyContext } from './MyContext.jsx';
// import { useState } from 'react';
// import {v1 as uuidv1} from "uuid";

// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [reply, setReply] = useState(null);
//   const [currThreadId, setCurrThreadId] = useState(uuidv1());

//   const providerValues = { //passing values
//     prompt, setPrompt,
//     reply, setReply,
//     currThreadId, setCurrThreadId
//   }; 

//   return (
//     <div className='app'>
//       <MyContext.Provider value={providerValues}>
//         <Sidebar></Sidebar>
//         <ChatWindow></ChatWindow>
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default App;


// //Display Chats
// //Format GPT Reply
// //Add Typing Effect
// import './App.css'
// import Sidebar from './Sidebar.jsx';
// import ChatWindow from './ChatWindow.jsx';
// import { MyContext } from './MyContext.jsx';
// import { useState } from 'react';
// import {v1 as uuidv1} from "uuid";

// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [reply, setReply] = useState(null);
//   const [currThreadId, setCurrThreadId] = useState(uuidv1());
//   const [prevChats, setPrevChats] = useState([]); //stores all chats(a sequence of prompts and replies) of curr threads
//   const [newChat, setNewChat] = useState(true);

//   const providerValues = { //passing values
//     prompt, setPrompt,
//     reply, setReply,
//     currThreadId, setCurrThreadId,
//     newChat, setNewChat,
//     prevChats, setPrevChats
//   }; 

//   return (
//     <div className='app'>
//       <MyContext.Provider value={providerValues}>
//         <Sidebar></Sidebar>
//         <ChatWindow></ChatWindow>
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default App;


//Display Thread History
//Configure New Chat
//Display Chats in Thread
//Delete a Thread
//Implement Dropdown and add extra features
import './App.css';
import Sidebar from './Sidebar.jsx';
import ChatWindow from './ChatWindow.jsx';
import { MyContext } from './MyContext.jsx';
import { useState } from 'react';
import {v1 as uuidv1} from "uuid";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]); //stores all chats(a sequence of prompts and replies) of curr threads
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);

  const providerValues = { //passing values
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId,
    newChat, setNewChat,
    prevChats, setPrevChats,
    allThreads, setAllThreads
  }; 

  return (
    <div className='app'>
      <MyContext.Provider value={providerValues}>
        <Sidebar></Sidebar>
        <ChatWindow></ChatWindow>
      </MyContext.Provider>
    </div>
  );
}

export default App;
