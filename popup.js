// 儲存 API Key
document.getElementById("saveKey").addEventListener("click", () => {
    const key = document.getElementById("apiKey").value.trim();
    if (key) {
        chrome.storage.local.set({ geminiApiKey: key }, () => {
            alert("✅ API Key 已儲存！");
        });
    }
});

// 每次打開 popup 時，自動讀取 key
chrome.storage.local.get("geminiApiKey", (data) => {
    if (data.geminiApiKey) {
        document.getElementById("apiKey").value = data.geminiApiKey;
    }
});

document.getElementById("translateBtn").addEventListener("click", async () => {
    const input = document.getElementById("input").value.trim();
    const resultEl = document.getElementById("result");

    if (!input) {
        resultEl.textContent = "⚠️ 請輸入文字";
        return;
    }

    resultEl.textContent = "⏳ 翻譯中...";

    chrome.storage.local.get("geminiApiKey", async (data) => {
        const apiKey = data.geminiApiKey;
        if (!apiKey) {
            resultEl.textContent = "❌ 請先輸入並儲存 API Key。";
            return;
        }

        const prompt = isChinese(input)
            ? `你是一位专业的中英口语沟通教练，擅长将中文翻译成自然流畅的职场英文。请将下列中文句子翻译成符合「一般工作场合口语」的英文，并解释翻译中所使用的文法结构、时态、搭配习惯。请保持语气自然、有礼貌，适用于日常会议、同事对话、远距沟通等职场交流场景,請將這句中文翻譯為自然流暢的英文：${input}`
            : `你是一位擅长职场沟通的英语教练，请帮我润色以下英文句子，使其更自然、清晰，并符合「一般工作口语」的语境，例如会议沟通、工作协调、邮件说明等场合。润色后请解释修改原因，包括语法结构、时态、用词习惯、礼貌程度等。请确保语气自然、专业但不死板, 請幫我修正這段英文，使其更自然清晰：${input}`;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            const data = await response.json();
            const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

            resultEl.textContent = content || "⚠️ 無法取得翻譯結果";
        } catch (err) {
            console.error(err);
            resultEl.textContent = "❌ 發生錯誤，請檢查網路或 API Key。";
        }
    });
});

function isChinese(text) {
    return /[\u4e00-\u9fa5]/.test(text);
}
