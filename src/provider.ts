
type Provider = "gemini" | "groq"

type HelloOutput = {
    ok: true,
    provider: Provider,
    model: string,
    message: string
}

type GeminiGenerateContent = {
    candidates?: Array<{content?: {parts?: Array<{text?: string}>}}>,
}
async function helloGemini(): Promise<HelloOutput> {
    const apiKey = process.env.GOOGLE_API_KEY
    if (!apiKey) {
        throw new Error("GOOGLE_API_KEY is not set")
    }
    const model = "gemini-2.0-flash-lite"
}