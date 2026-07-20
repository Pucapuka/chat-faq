import { useState } from "react";
import { sendMessage } from "../services/api";
import { getSessionId } from "../utils/session";

export default function InputArea({

    typing,

    addUserMessage,

    addBotMessage,

    startTyping,

    stopTyping

}) {

    const [text, setText] = useState("");

    async function send() {

        // Evita enviar mensagem vazia
        if (!text.trim()) return;

        // Evita múltiplos envios simultâneos
        if (typing) return;

        const userMessage = text.trim();

        // Exibe imediatamente a mensagem do usuário
        addUserMessage(userMessage);

        // Limpa o campo
        setText("");

        // Exibe "Digitando..."
        startTyping();

        try {

            const response = await sendMessage(
                getSessionId(),
                userMessage
            );

            addBotMessage(response.message);

        } catch {

            addBotMessage(
                "Não foi possível conectar ao servidor."
            );

        } finally {

            stopTyping();

        }

    }

    function handleKeyDown(event) {

        if (event.key === "Enter") {

            send();

        }

    }

    return (

        <div className="input-area">

            <input
                type="text"
                placeholder="Digite sua dúvida..."
                value={text}
                disabled={typing}
                onChange={(event) => setText(event.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button
                onClick={send}
                disabled={typing}
            >

                {typing ? "Enviando..." : "Enviar"}

            </button>

        </div>

    );

}