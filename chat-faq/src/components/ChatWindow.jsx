import { useEffect, useRef } from "react";
import Message from "./Message";
import Typing from "./Typing";

export default function ChatWindow({ messages, typing }) {

    const messagesEndRef = useRef(null);

    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

    }, [messages, typing]);

    return (

        <main className="chat-window">

            {messages.map(msg => (

                <Message
                    key={msg.id}
                    sender={msg.sender}
                    text={msg.text}
                />

            ))}

            {typing && <Typing />}

            <div ref={messagesEndRef} />

        </main>

    );

}