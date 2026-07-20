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

    if (!response.ok) {

        throw new Error("Erro ao comunicar com o servidor");

    }

    return await response.json();

}