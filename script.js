// ===== Linear AI =====

const content = document.getElementById("content");

// ---------- HOME ----------
function showHome() {
    content.innerHTML = `
        <h1>Welcome to Linear AI</h1>
        <p>Your AI Creation Studio</p>
    `;
}

// ---------- CHAT ----------
function showChat() {
    content.innerHTML = `
        <h1>💬 Chat</h1>

        <div id="messages">
            <div class="bot-message">
                Hello! I'm Linear AI.
            </div>
        </div>

        <div class="chat-bar">
            <input
                id="userInput"
                type="text"
                placeholder="Type a message..."
            >

            <button id="sendBtn">
                Send
            </button>
        </div>
    `;

    document
        .getElementById("sendBtn")
        .addEventListener("click", sendMessage);
}

function sendMessage() {

    const input = document.getElementById("userInput");

    const messages = document.getElementById("messages");

    if (input.value.trim() === "") return;

    messages.innerHTML += `
        <div class="user-message">
            ${input.value}
        </div>

        <div class="bot-message">
            Chat AI coming soon.
        </div>
    `;

    input.value = "";

    messages.scrollTop = messages.scrollHeight;
}
// ---------- IMAGE STUDIO ----------
function showImage() {
    content.innerHTML = `
        <h1>🖼 Image Studio</h1>

        <p>Create amazing AI images.</p>

        <textarea
            id="imagePrompt"
            placeholder="Describe the image you want..."
            rows="6"
            style="width:100%; margin-top:20px;"
        ></textarea>

        <br><br>

        <button id="generateImageBtn">
            Generate Image
        </button>

        <div id="imageResult" style="margin-top:30px;"></div>
    `;

    document
        .getElementById("generateImageBtn")
        .addEventListener("click", function () {

            const prompt =
                document.getElementById("imagePrompt").value;

            document.getElementById("imageResult").innerHTML = `
                <h3>Prompt</h3>
                <p>${prompt}</p>

                <p><b>Image generation coming soon.</b></p>
            `;
        });
}

// ---------- VIDEO STUDIO ----------
function showVideo() {
    content.innerHTML = `
        <h1>🎥 Video Studio</h1>

        <p>Create AI videos from text or images.</p>

        <textarea
            id="videoPrompt"
            placeholder="Describe the video..."
            rows="6"
            style="width:100%; margin-top:20px;"
        ></textarea>

        <br><br>

        <button id="generateVideoBtn">
            Generate Video
        </button>

        <div id="videoResult" style="margin-top:30px;"></div>
    `;

    document
        .getElementById("generateVideoBtn")
        .addEventListener("click", function () {

            const prompt =
                document.getElementById("videoPrompt").value;

            document.getElementById("videoResult").innerHTML = `
                <h3>Prompt</h3>
                <p>${prompt}</p>

                <p><b>Video generation coming soon.</b></p>
            `;
        });
}
// ---------- SIMPLE PAGES ----------
function simplePage(title, message) {
    content.innerHTML = `
        <h1>${title}</h1>
        <p>${message}</p>
    `;
}

// ---------- BUTTONS ----------
document.getElementById("homeBtn").onclick = showHome;

document.getElementById("chatBtn").onclick = showChat;

document.getElementById("imageBtn").onclick = showImage;

document.getElementById("videoBtn").onclick = showVideo;

document.getElementById("audioBtn").onclick = function () {
    simplePage("🎵 Audio Studio", "Audio generation coming soon.");
};

document.getElementById("docsBtn").onclick = function () {
    simplePage("📄 Documents", "Document tools coming soon.");
};

document.getElementById("codeBtn").onclick = function () {
    simplePage("💻 Code", "Code tools coming soon.");
};

document.getElementById("projectsBtn").onclick = function () {
    simplePage("📁 Projects", "Projects coming soon.");
};

document.getElementById("settingsBtn").onclick = function () {
    simplePage("⚙️ Settings", "Settings coming soon.");
};

// ---------- START ----------
showChat();
