import { API_URL } from "../config/config";

export async function sendMessage(session, message) {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            session,
            message
        })
    });

    console.log("Status:", response.status);

    const text = await response.text();

    console.log("Resposta recebida:", text);

    return {
        message: text
    };
}