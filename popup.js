document.getElementById("translateBtn").addEventListener("click", () => {
    const input = document.getElementById("input").value.trim();
    const resultEl = document.getElementById("result");
  
    if (!input) {
      resultEl.textContent = "⚠️ 請輸入文字";
      return;
    }
  
    // Demo 模拟翻译
    if (/[\u4e00-\u9fa5]/.test(input)) {
      resultEl.textContent = "💡 翻譯為英文（Mock）: This is the translated English.";
    } else {
      resultEl.textContent = "💡 修正英文（Mock）: This is the polished version.";
    }
  });
  