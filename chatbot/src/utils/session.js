export function getSessionId() {

    let session = localStorage.getItem("session");

    if (!session) {

        session = crypto.randomUUID();

        localStorage.setItem("session", session);

    }

    return session;

}