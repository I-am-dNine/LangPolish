# LangPolish – Chrome 日常对话翻译助手插件（学习英文用）

LangPolish 是一个轻量级 Chrome 插件，帮助你将中文翻译成自然流畅的英文，或将不自然的英文润色成地道表达，适用于日常写作、邮件、职场对话等情境。

## 功能特色

- 🔤 支援中英文输入，自动判断并生成翻译/润色建议  
- 🤖 使用 Google Gemini 2.5 Flash 模型进行语义优化  
- 💾 支援输入并保存 API Key（储存在本地 `chrome.storage.local`）  
- 🕐 翻译中动画提示，提升使用体验  


## 安装与使用（开发模式）

1. 前往 [Gemini AI Studio](https://aistudio.google.com/) 取得 API Key  
2. 克隆或下载本仓库
3. 打开 `chrome://extensions`，开启开发者模式 → 载入已解压扩展  
4. 点击插件图标，填入 API Key  
5. 输入中/英文句子 → 点击「翻译」即可获取优化结果


## 权限说明

- 使用 `chrome.storage.local` 储存用户 API Key（不会上传）  
- 调用 Gemini API 时需访问：`https://generativelanguage.googleapis.com/*`  

## 未来功能规划


## 🛡️ 安全提醒
请勿将 API Key 公开上传。若要公开发布此插件，请使用后端代理方式保护金钥。


## 插件功能状态整理如下：
| 功能                        | 状态              |
| --------------------       | -------------    |
| Gemini API Key 输入与储存    | ✅ 已完成         |
| 中英翻译 / 润色功能           | ✅ 已完成         |
| 翻译中动态 loading 点点动画   | ✅ 已完成         |
| 翻译结果显示                 | ✅ 已完成         |
| 📋 一键复制结果              | ✅ 已完成         |
| 语种判断（中/英）            | ✅ 基础判断（可日后升级） |


---

本插件适合个人使用或开发者参考。

