import ChatPage from "@/components/ChatPage/ChatPage";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ChatPage />
      </Suspense>
    </div>
  );
};
export default Page;
