import { useState, useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatInput from "./components/ChatInput";
import MessageBubble from "./components/MessageBubble";
import Welcome from "./components/Welcome";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [chatHistory, setChatHistory] = useState(() => {
    const saved = localStorage.getItem("chatHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Save Chat History
  useEffect(() => {
    localStorage.setItem(
      "chatHistory",
      JSON.stringify(chatHistory)
    );
  }, [chatHistory]);

  // Send Message
  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessage("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "❌ Cannot connect to FastAPI backend.",
        },
      ]);
    }

    setLoading(false);
  };

  // New Chat
  const newChat = () => {
    if (messages.length > 0) {
      setChatHistory((prev) => [
        ...prev,
        {
          id: Date.now(),
          title:
            messages[0]?.text.substring(0, 30) ||
            "New Chat",
          messages: [...messages],
        },
      ]);
    }

    setMessages([]);
    setMessage("");
  };

  // Load Previous Chat
  const loadChat = (chat) => {
    setMessages(chat.messages);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        background: "#0B1120",
      }}
    >
      <Sidebar
        newChat={newChat}
        chatHistory={chatHistory}
        loadChat={loadChat}
      />

      <Paper
        elevation={0}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          background: "#101827",
          borderRadius: 0,
        }}
      >
        <Header />

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 3,
            background: "#111827",
          }}
        >
          {messages.length === 0 && <Welcome />}

          {messages.map((msg, index) => (
            <MessageBubble
              key={index}
              role={msg.role}
              text={msg.text}
            />
          ))}

          {loading && (
            <Typography
              sx={{
                color: "#9CA3AF",
                mt: 2,
                fontStyle: "italic",
              }}
            >
              🤖 Aravin AI is typing...
            </Typography>
          )}

          <div ref={messagesEndRef}></div>
        </Box>

        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          loading={loading}
        />
      </Paper>
    </Box>
  );
}

export default App;
