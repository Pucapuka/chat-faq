import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import InputArea from "./components/InputArea";

import useChat from "./hooks/useChat";

export default function App() {

    const {

        messages,

        typing,

        startTyping,

        stopTyping,

        addUserMessage,

        addBotMessage

    } = useChat();

    return (

        <div className="app">

            <div className="chat-container">

                <Header />

                <ChatWindow
                    messages={messages}
                />

                <InputArea
                    typing={typing}
                    startTyping={startTyping}
                    stopTyping={stopTyping}
                    addUserMessage={addUserMessage}
                    addBotMessage={addBotMessage}
                />

            </div>

        </div>

    );

}