import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";

import { Form } from "./components/Form/Form";
import { Message } from "./components/Message/Message";

import db from "./firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // this  will track all data in my db
    const dbMessagesCollection = query(
      collection(db, "messages"),
      orderBy("timestamp", "desc")
    );

    onSnapshot(dbMessagesCollection, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })) // doc.data = {username: asd, message: qwe}
      );
    });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your username"));
  }, []);

  const handleInput = (e) => setInput(e.target.value);

  const sendMessage = (e) => {
    e.preventDefault();

    addDoc(collection(db, "messages"), {
      message: input,
      username,
      timestamp: serverTimestamp(),
    });

    // setMessages([...messages, { username, message: input }]); // pushes new object every time
    setInput("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/640px-Telegram_logo.svg.png"
          alt="logo"
          width="100"
        />
        <h1>Welcome, {username}!</h1>
        <Form
          input={input}
          sendMessage={sendMessage}
          handleInput={handleInput}
        />
      </div>

      <div>
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} message={message} username={username} />
          ))}
        </FlipMove>
      </div>
    </>
  );
};

export default App;
