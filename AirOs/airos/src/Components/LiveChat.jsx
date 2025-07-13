import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const LiveChat = () => {
  const loggedInUser = useSelector(
    (store) => store?.user?.loggedInUser?.username
  );
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  // const navigate = useNavigate();

  const generateRandomColor = () => {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
  };

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = () => {
    if (userMessage.trim() === "" || !loggedInUser) return;

    const newMsg = {
      sender: loggedInUser,
      message: userMessage,
      color: generateRandomColor(),
    };

    socketRef.current.emit("new_message", {
      sender: loggedInUser,
      message: userMessage,
    });

    setMessages((prev) => [
      ...prev,
      {
        text: `${loggedInUser}: ${userMessage}`,
        color: newMsg.color,
        isCurrentUser: true,
      },
    ]);

    setUserMessage("");
  };

  useEffect(() => {
    socketRef.current = io("http://localhost:8080");

    socketRef.current.on("all_messages", (data) => {
      const formattedMessages = data.map((msg) => ({
        text: `${msg.sender}: ${msg.message}`,
        color: generateRandomColor(),
        isCurrentUser: msg.sender === loggedInUser,
      }));
      setMessages(formattedMessages);
    });

    socketRef.current.on("server_message", (newMsg) => {
      setMessages((prev) => [
        ...prev,
        {
          text: `${newMsg.sender}: ${newMsg.message}`,
          color: generateRandomColor(),
          isCurrentUser: newMsg.sender === loggedInUser,
        },
      ]);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [loggedInUser]);

  return (
    <div className="w-80 h-[540px] relative bg-[#191919] mr-32 rounded-lg overflow-hidden border border-[#191919]">
      {/* Chat messages container - visible to all */}
      <div className="h-[calc(100%-60px)] overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-3  rounded-lg bg-[#191919] max-w-full">
            <div
              style={{ color: msg.color }}
              className="text-sm font-medium font-['Roboto'] leading-normal px-2 "
            >
              {msg.text.split(":")[0]}:
              <span className=" justify-start text-sm font-normal font-['Roboto'] leading-normal text-white">
                {msg.text.split(":")[1]}
              </span>
            </div>
            {/* <div className="text-white mt-1">{msg.text.split(":")[1]}</div> */}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area - only for signed-in users */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#1E1E1E] border-t border-[#2B2B2B]">
        {loggedInUser ? (
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 bg-[#2B2B2B] text-white p-2 rounded-lg border border-[#3B3B3B] focus:outline-none focus:border-[#4ECDC4]"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#FECC30] text-black px-4 py-2 rounded-lg hover:bg-[#FECC30] transition-colors"
            >
              Send
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-400 py-2">
            Sign in to participate in the chat
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChat;
