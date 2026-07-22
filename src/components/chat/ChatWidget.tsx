import { useState } from "react";
import { askAI } from "../../api/chat";
import { useFarm } from "../../context/FarmDataContext";

export default function ChatWidget() {

    const farm = useFarm();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hello! I'm SmartSoil AI 🌱"
        }
    ]);

    async function sendMessage() {

        if (!message.trim()) return;

        const userMessage = message;

        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: userMessage
            }
        ]);

        setMessage("");

        const response = await askAI(userMessage, farm);

        setMessages(prev => [
            ...prev,
            {
                sender: "ai",
                text: response.reply
            }
        ]);

    }

    return (

        <>

            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-green-600 text-3xl shadow-xl"
            >
                🌱
            </button>

            {

                open &&

                <div className="fixed bottom-24 right-6 h-[550px] w-96 rounded-2xl bg-zinc-900 shadow-2xl flex flex-col">

                    <div className="border-b border-zinc-700 p-4 text-xl font-bold text-white">
                        SmartSoil AI
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">

                        {

                            messages.map((msg, index) => (

                                <div
                                    key={index}
                                    className={
                                        msg.sender === "user"
                                            ? "ml-auto w-fit max-w-[80%] rounded-xl bg-green-600 p-3 text-white"
                                            : "w-fit max-w-[80%] rounded-xl bg-zinc-800 p-3 text-white"
                                    }
                                >

                                    {msg.text}

                                </div>

                            ))

                        }

                    </div>

                    <div className="flex gap-2 border-t border-zinc-700 p-3">

                        <input

                            className="flex-1 rounded-lg bg-zinc-800 p-2 text-white"

                            placeholder="Ask something..."

                            value={message}

                            onChange={(e) => setMessage(e.target.value)}

                            onKeyDown={(e) => {

                                if (e.key === "Enter") {

                                    sendMessage();

                                }

                            }}

                        />

                        <button

                            onClick={sendMessage}

                            className="rounded-lg bg-green-600 px-4 text-white"

                        >

                            Send

                        </button>

                    </div>

                </div>

            }

        </>

    );

}