import { useState } from "react";

export default function useMailModal() {
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [mailSubject, setMailSubject] = useState("Hello ZWAP!");
  const [mailMessage, setMailMessage] = useState("");

  return {
    isMailOpen,
    setIsMailOpen,
    mailSubject,
    setMailSubject,
    mailMessage,
    setMailMessage,
  };
}