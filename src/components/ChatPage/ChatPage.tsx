"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "../ui/button";
import RenderMessages from "./Children/RenderMessages";
export type Message = { role: "user" | "assistant"; content: string };

interface ChatPageProps {}
const ChatPage: React.FC<ChatPageProps> = ({}) => {
  const [text, setText] = useState("");
  const handleSend = (text: string) => {
    if (text.trim() === "") return;
    console.log(text);
    setText("");
  };
  return (
    <div className="flex">
      <div className="bg-[#171717] w-[300px] h-screen"></div>
      <div className="bg-[#212121] flex-1 h-screen px-[100px] py-[20px] flex flex-col">
        <div className="flex-1">
          <div className="h-[30px]"></div>
          <RenderMessages
            messages={[
              { role: "user", content: "hii" },
              { role: "assistant", content: "How can I assist you today?" },
            ]}
          />
          <div className="h-[30px]"></div>
        </div>
        <form
          className="relative flex"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(text);
          }}
        >
          <TextareaAutosize
            minRows={1}
            maxRows={6}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend(text);
              }
            }}
            placeholder="Message"
            className="w-full resize-none border border-gray-400 focus:outline-none rounded-xl py-[15px] pl-6"
          />
          <div className="absolute bottom-2 right-2">
            <Button className="p-0 aspect-square rounded-lg" type="submit">
              <UpArrow />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ChatPage;

interface UpArrowProps {}
const UpArrow: React.FC<UpArrowProps> = ({}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white dark:text-black"
    >
      <path
        d="M7 11L12 6L17 11M12 18V7"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
