import React, { ReactNode, useEffect, useRef, } from "react";
import { HistoryChatInterface } from "./popup";
import Markdown from "markdown-to-jsx";
import {RiChatAiLine, RiUserLine } from "@remixicon/react";

const ChatHistory = ({ history }: { history: HistoryChatInterface[] }) => {
  const lastElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastElement.current) {
      lastElement.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [history]);

  return (
    <div className="w-full">
      {history.map((chat, index, chats) => {
        return (
          <div
            key={index}
            className="w-full"
            ref={index == chats.length - 1 ? lastElement : null}
          >
            <div 
                className="mb-2 mt-2"
            >
                {
                    chat.role === "user" ? (
                        <div
                        className="flex items-center gap-3"
                        >
                            <RiUserLine
                            size={15}
                            />
                            <p>You :</p>
                        </div>
                    ) : (
                        <div
                            className="flex items-center gap-3"
                        > <RiChatAiLine/> Rootsy :</div>
                    )
                }
            </div>
            <div className="w-full">
              <Markdown
                options={{
                  overrides: {
                    p: {
                      props: {
                        className: "mb-[20px]",
                      },
                    },
                    ul: {
                      props: {
                        className: "mb-[20px] space-y-[10px]",
                      },
                    },
                    ol: {
                      props: {
                        className: "mb-[20px] space-y-[10px]",
                      },
                    },
                    table: {
                      component: TableWrapper,
                    },
                  },
                }}
              >
                {typeof chat.messages === "string" ? chat.messages : String(chat.messages)}
              </Markdown>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function TableWrapper({ children }: { children: ReactNode }) {
  return <div className="w-full overflow-auto">{children}</div>;
}

export default ChatHistory;
