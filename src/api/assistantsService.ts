import { Message } from "@/components/ChatPage/ChatPage";
import environmentVars from "@/lib/environmentVars";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: environmentVars.ASSISTANTS_SERVER,
});
const assistantsService = {
  getMessages: async ({ threadId }: { threadId: string }) => {
    const result = await axiosInstance.get<Message[]>(
      `/threads/${threadId}/messages`
    );
    return result.data;
  },
  createThread: async () => {
    const result = await axiosInstance.post<{ threadId: string }>(`/threads`);
    return result.data;
  },
  chat: async (body: {
    threadId: string;
    assistantId: string;
    userMessage: string;
  }) => {
    const result = await axiosInstance.post<{ content: string }>(`/chat`, body);
    return result.data;
  },

  getChatStreamReader: async (body: {
    threadId: string;
    assistantId: string;
    userMessage: string;
  }) => {
    const url = `${environmentVars.ASSISTANTS_SERVER}/chat-stream-fn-calling`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.body!.getReader();
  },
};

export default assistantsService;
