"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import EmptyBoxState from "./EmptyBoxState";
import GroupSizeUi from "./GroupSizeUi";
import BudgetUi from "./BudgetUi";
import SelectDays from "./SelectDays";
import FinalUi from "./FinalUi";

type Message = {
  role: "user" | "assistant";
  content: string;
  time?: string;
  ui?: string;
};

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUi, setCurrentUi] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, currentUi]);

  const getTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Send message (from input or UI buttons)
  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const newMsg: Message = {
      role: "user",
      content,
      time: getTime(),
      ui: currentUi,
    };

    const updated = [...messages, newMsg];
    setMessages(updated);
    setIsLoading(true);
    setUserInput("");

    try {
      const res = await axios.post("/api/aimodel", { messages: updated });
      console.log("AI Response:", res.data);

      const aiMsg: Message = {
        role: "assistant",
        content: res.data?.resp || "Something went wrong.",
        time: getTime(),
        ui: res.data?.ui || "",
      };

      setMessages((prev) => [...prev, aiMsg]);
      setCurrentUi(res.data?.ui || "");
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
          time: getTime(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Dynamic UI rendering using switch
  const RenderUi = () => {
    switch (currentUi) {
      case "budget":
        return <BudgetUi onSelect={sendMessage} />;
      case "groupSize":
        return <GroupSizeUi onSelect={sendMessage} />;
      case "tripDuration":
        return <SelectDays onSelect={sendMessage} />;
      case "final":
        return <FinalUi />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen flex bg-gray-100">
      {/* CHAT SECTION */}
      <div className="w-1/2 flex flex-col bg-white border-r">
        {messages.length === 0 && !isLoading && (
          <EmptyBoxState onSendMessage={sendMessage} />
        )}

        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`px-4 py-2 text-sm max-w-[75%] break-words rounded-xl ${
                  msg.role === "user"
                    ? "bg-orange-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>
              <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
            </div>
          ))}

          {/* Loader */}
          {isLoading && (
            <div className="flex flex-col items-start">
              <div className="px-4 py-2 text-sm max-w-[40%] rounded-xl bg-gray-200 text-gray-700 animate-pulse rounded-bl-none">
                AI is typing...
              </div>
            </div>
          )}

          {/* Dynamic UI Component */}
          {RenderUi()}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t flex gap-2 bg-gray-50">
          <input
            type="text"
            placeholder="Type a message"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(userInput)}
            className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={isLoading}
          />
          <button
            onClick={() => sendMessage(userInput)}
            disabled={isLoading}
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-medium text-white hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Trip Preview"
            className="w-[80%] max-w-md rounded-2xl shadow-lg mx-auto"
          />
          <p className="mt-4 text-sm text-gray-600">
            Your trip visuals will appear here ✈️🌍
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
