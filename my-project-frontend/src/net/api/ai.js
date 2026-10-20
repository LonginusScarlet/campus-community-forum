import {fetchPost} from "@/net";

export const apiChatWithAI = async (context, onMessage, onError, onComplete) => {
    try {
        const response = await fetchPost('/api/ai/chat', context)

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const text = decoder.decode(value)
                .replaceAll("data:", "")
                .replaceAll("\n", "")
            onMessage(text)
        }
        onComplete()
    } catch (e) {
        onError(e)
    }
}
