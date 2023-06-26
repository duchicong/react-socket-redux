import React from "react";
import NavbarChatBox from "./NavbarChatBox";
import FooterChatBox from "./FooterChatBox";
import HeaderChatBox from "./HeaderChatBox";
import ContentChatBox from "./ContentChatBox";

interface IChatBoxProps {
  children: React.ReactNode;
}

const ChatBox = ({ children }: IChatBoxProps) => {
  return (
    <div id="container">
      <NavbarChatBox />
      <main>
        <HeaderChatBox />
        <ContentChatBox />
        <FooterChatBox />
      </main>
    </div>
  )
}

export default ChatBox;
