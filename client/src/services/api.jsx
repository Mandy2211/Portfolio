const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function getProjects() {
    const response = await fetch(`${API_URL}/projects`);
    return response.json();
}

export async function sendMessage(data) {
    const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
    }

    return result;
}

export async function getBooks() {
    const response = await fetch(`${API_URL}/books`);
    const data = await response.json();
    return data;
}