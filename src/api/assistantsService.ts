import { Message } from "@/components/ChatPage/ChatPage";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
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
};

export default assistantsService;
