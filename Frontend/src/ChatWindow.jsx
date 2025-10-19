// //Building ChatWindow
// import "./ChatWindow.css"; 
// import Chat from "./Chat.jsx";

// function ChatWindow() {
//     return (
//         <div className="chatWindow">
//            <div className="navbar">
//                 <span>ChatGPT <i className="fa-solid fa-chevron-down"></i></span>
//                 <div className="userIconDiv">
//                     <span className="userIcon"><i className="fa-solid fa-user"></i></span>
//                 </div>
//            </div>
//            <Chat></Chat>
           
//            <div className="chatInput">
//                 <div className="inputBox">
//                     <input placeholder="Ask anything">

//                     </input>
//                     <div id="submit"><i className="fa-solid fa-paper-plane"></i></div>
//                 </div>
//                 <p className="info">
//                     ChatGPT can make mistake. Check important info. See Cookie Preferences.
//                 </p>
//            </div>
//         </div>
//     )
// }

// export default ChatWindow;


// // Functionality: Get Reply for Prompt
// import "./ChatWindow.css"; 
// import Chat from "./Chat.jsx";
// import { useContext } from "react";
// import { MyContext } from "./MyContext.jsx";

// function ChatWindow() {
//     const {prompt, setPrompt, reply, setReply, currThreadId} = useContext(MyContext);

//     const getReply = async () => {
//         console.log("message", prompt, "threadId", currThreadId);
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 message: prompt,
//                 threadId: currThreadId
//             })
//         };

//         try {
//             const response = await fetch("http://localhost:8080/api/chat", options);
//             const res = await response.json();
//             console.log(res);
//             setReply(res.reply);
//         } catch(err) {
//             console.log(err);
//         }
//     }

//     return (
//         <div className="chatWindow">
//            <div className="navbar">
//                 <span>ChatGPT <i className="fa-solid fa-chevron-down"></i></span>
//                 <div className="userIconDiv">
//                     <span className="userIcon"><i className="fa-solid fa-user"></i></span>
//                 </div>
//            </div>
//            <Chat></Chat>
           
//            <div className="chatInput">
//                 <div className="inputBox">
//                     <input placeholder="Ask anything"
//                         value={prompt}
//                         onChange={(e) => setPrompt(e.target.value)}
//                         onKeyDown={(e) => e.key === "Enter" ? getReply() : ""}
//                     >

//                     </input>
//                     <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
//                 </div>
//                 <p className="info">
//                     ChatGPT can make mistake. Check important info. See Cookie Preferences.
//                 </p>
//            </div>
//         </div>
//     )
// }

// export default ChatWindow;


// //Adding Loader
// import "./ChatWindow.css"; 
// import Chat from "./Chat.jsx";
// import { useContext, useState } from "react";
// import { MyContext } from "./MyContext.jsx";
// import { ScaleLoader} from "react-spinners";

// function ChatWindow() {
//     const {prompt, setPrompt, reply, setReply, currThreadId} = useContext(MyContext);
//     const [loading, setLoading] = useState(false);

//     const getReply = async () => {
//         setLoading(true);
//         console.log("message", prompt, "threadId", currThreadId);
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 message: prompt,
//                 threadId: currThreadId
//             })
//         };

//         try {
//             const response = await fetch("http://localhost:8080/api/chat", options);
//             const res = await response.json();
//             console.log(res);
//             setReply(res.reply);
//         } catch(err) {
//             console.log(err);
//         }
//         setLoading(false);
//     }

//     return (
//         <div className="chatWindow">
//            <div className="navbar">
//                 <span>ChatGPT <i className="fa-solid fa-chevron-down"></i></span>
//                 <div className="userIconDiv">
//                     <span className="userIcon"><i className="fa-solid fa-user"></i></span>
//                 </div>
//            </div>
//            <Chat></Chat>

//            <ScaleLoader color="#fff" loading={loading}>

//            </ScaleLoader>
//            <div className="chatInput">
//                 <div className="inputBox">
//                     <input placeholder="Ask anything"
//                         value={prompt}
//                         onChange={(e) => setPrompt(e.target.value)}
//                         onKeyDown={(e) => e.key === "Enter" ? getReply() : ""}
//                     >

//                     </input>
//                     <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
//                 </div>
//                 <p className="info">
//                     ChatGPT can make mistake. Check important info. See Cookie Preferences.
//                 </p>
//            </div>
//         </div>
//     )
// }

// export default ChatWindow;


// //Display Chats
// //Format GPT Reply
// //Add Typing Effect
// import "./ChatWindow.css"; 
// import Chat from "./Chat.jsx";
// import { useContext, useState, useEffect } from "react";
// import { MyContext } from "./MyContext.jsx";
// import { ScaleLoader} from "react-spinners";

// function ChatWindow() {
//     const {prompt, setPrompt, reply, setReply, currThreadId, prevChats, setPrevChats} = useContext(MyContext);
//     const [loading, setLoading] = useState(false);

//     const getReply = async () => {
//         setLoading(true);
//         console.log("message", prompt, "threadId", currThreadId);
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 message: prompt,
//                 threadId: currThreadId
//             })
//         };

//         try {
//             const response = await fetch("http://localhost:8080/api/chat", options);
//             const res = await response.json();
//             console.log(res);
//             setReply(res.reply);
//         } catch(err) {
//             console.log(err);
//         }
//         setLoading(false);
//     }

//     //Append new chat to PrevChats
//     useEffect(() => {
//         if(prompt && reply) {
//             setPrevChats(prevChats => (
//                 [...prevChats, {
//                     role: "user",
//                     content: prompt
//                 },{
//                     role: "assistant",
//                     content: reply
//                 }]
//             ));
//         }

//         setPrompt("");
//     }, [reply]);

//     return (
//         <div className="chatWindow">
//            <div className="navbar">
//                 <span>ChatGPT <i className="fa-solid fa-chevron-down"></i></span>
//                 <div className="userIconDiv">
//                     <span className="userIcon"><i className="fa-solid fa-user"></i></span>
//                 </div>
//            </div>
//            <Chat></Chat>

//            <ScaleLoader color="#fff" loading={loading}>

//            </ScaleLoader>
//            <div className="chatInput">
//                 <div className="inputBox">
//                     <input placeholder="Ask anything"
//                         value={prompt}
//                         onChange={(e) => setPrompt(e.target.value)}
//                         onKeyDown={(e) => e.key === "Enter" ? getReply() : ""}
//                     >

//                     </input>
//                     <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
//                 </div>
//                 <p className="info">
//                     ChatGPT can make mistake. Check important info. See Cookie Preferences.
//                 </p>
//            </div>
//         </div>
//     )
// }

// export default ChatWindow;



// //Display Chats in Thread
// import "./ChatWindow.css"; 
// import Chat from "./Chat.jsx";
// import { useContext, useState, useEffect } from "react";
// import { MyContext } from "./MyContext.jsx";
// import { ScaleLoader} from "react-spinners";

// function ChatWindow() {
//     const {prompt, setPrompt, reply, setReply, currThreadId, prevChats, setPrevChats, setNewChat} = useContext(MyContext);
//     const [loading, setLoading] = useState(false);

//     const getReply = async () => {
//         setLoading(true);
//         setNewChat(false);
//         console.log("message", prompt, "threadId", currThreadId);
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 message: prompt,
//                 threadId: currThreadId
//             })
//         };

//         try {
//             const response = await fetch("http://localhost:8080/api/chat", options);
//             const res = await response.json();
//             console.log(res);
//             setReply(res.reply);
//         } catch(err) {
//             console.log(err);
//         }
//         setLoading(false);
//     }

//     //Append new chat to PrevChats
//     useEffect(() => {
//         if(prompt && reply) {
//             setPrevChats(prevChats => (
//                 [...prevChats, {
//                     role: "user",
//                     content: prompt
//                 },{
//                     role: "assistant",
//                     content: reply
//                 }]
//             ));
//         }

//         setPrompt("");
//     }, [reply]);

//     return (
//         <div className="chatWindow">
//            <div className="navbar">
//                 <span>ChatGPT <i className="fa-solid fa-chevron-down"></i></span>
//                 <div className="userIconDiv">
//                     <span className="userIcon"><i className="fa-solid fa-user"></i></span>
//                 </div>
//            </div>

//            <Chat></Chat>

//            <ScaleLoader color="#fff" loading={loading}>

//            </ScaleLoader>
//            <div className="chatInput">
//                 <div className="inputBox">
//                     <input placeholder="Ask anything"
//                         value={prompt}
//                         onChange={(e) => setPrompt(e.target.value)}
//                         onKeyDown={(e) => e.key === "Enter" ? getReply() : ""}
//                     >

//                     </input>
//                     <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
//                 </div>
//                 <p className="info">
//                     ChatGPT can make mistake. Check important info. See Cookie Preferences.
//                 </p>
//            </div>
//         </div>
//     )
// }

// export default ChatWindow;


//Implement Dropdown and add extra features
import "./ChatWindow.css"; 
import Chat from "./Chat.jsx";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import { ScaleLoader} from "react-spinners";

function ChatWindow() {
    const {prompt, setPrompt, reply, setReply, currThreadId, prevChats, setPrevChats, setNewChat} = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false); 

    const getReply = async () => {
        setLoading(true);
        setNewChat(false);
        console.log("message", prompt, "threadId", currThreadId);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId
            })
        };

        try {
            // const response = await fetch("http://localhost:8080/api/chat", options);
            const response = await fetch("https://chatgpt-project-backend.onrender.com/", options);
            const res = await response.json();
            console.log(res);
            setReply(res.reply);
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }

    //Append new chat to PrevChats
    useEffect(() => {
        if(prompt && reply) {
            setPrevChats(prevChats => (
                [...prevChats, {
                    role: "user",
                    content: prompt
                },{
                    role: "assistant",
                    content: reply
                }]
            ));
        }

        setPrompt("");
    }, [reply]);

    const handleProfileCheck = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="chatWindow">
           <div className="navbar">
                <span>ChatGPT <i className="fa-solid fa-chevron-down"></i></span>
                <div className="userIconDiv" onClick={handleProfileCheck}>
                    <span className="userIcon"><i className="fa-solid fa-user"></i></span>
                </div>
           </div>
           {
                isOpen && 
                <div className="dropDown">
                    <div className="dropDownItem"><i className="fa-solid fa-gear"></i>Settings</div>
                    <div className="dropDownItem"><i className="fa-solid fa-cloud-arrow-up"></i>Upgrade plan</div>
                    <div className="dropDownItem"><i className="fa-solid fa-arrow-right-from-bracket"></i>Log out</div>
                </div>
           }
           <Chat></Chat>

           <ScaleLoader color="#fff" loading={loading}>

           </ScaleLoader>
           <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask anything"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" ? getReply() : ""}
                    >

                    </input>
                    <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
                </div>
                <p className="info">
                    ChatGPT can make mistake. Check important info. See Cookie Preferences.
                </p>
           </div>
        </div>
    )
}

export default ChatWindow;