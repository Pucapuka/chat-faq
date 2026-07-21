import { useState } from "react";

export default function useChat() {

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            text: "Olá! Sou o assistente virtual. Como posso ajudá-lo?"
        }
    ]);

    const [typing, setTyping] = useState(false);

    function startTyping() {

        setTyping(true);

    }

    function stopTyping() {

        setTyping(false);

    }

    function addUserMessage(text) {

        setMessages(old => [
            ...old,
            {
                id: Date.now(),
                sender: "user",
                text
            }
        ]);

    }

    function addBotMessage(text) {

        setMessages(old => [
            ...old,
            {
                id: Date.now(),
                sender: "bot",
                text
            }
        ]);

    }

    return {

        messages,

        typing,

        startTyping,

        stopTyping,

        addUserMessage,

        addBotMessage

    };

}