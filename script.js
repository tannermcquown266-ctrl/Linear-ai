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

    <p>Create AI videos from text, images, or videos.</p>

    <br>

    <textarea
        id="videoPrompt"
        placeholder="Describe the video you want to create..."
        rows="8"
        style="
            width:100%;
            padding:15px;
            border-radius:12px;
            font-size:16px;
            resize:vertical;
        "
    ></textarea>

    <br><br>

    <h3>Upload Files</h3>

    <input
        type="file"
        id="imageUpload"
        accept="image/*"
    >

    <br><br>

    <input
        type="file"
        id="videoUpload"
        accept="video/*"
    >

    <br><br>

    <input
        type="file"
        id="audioUpload"
        accept="audio/*"
    >

    <br><br>

    <h3>Video Length</h3>

    <select id="videoLength">
        <option>15 seconds</option>
        <option>30 seconds</option>
        <option>1 minute</option>
        <option>2 minutes</option>
        <option>3 minutes</option>
        <option>5 minutes</option>
        <option>10 minutes</option>
        <option>30 minutes</option>
    </select>

    <br><br>
        <h3>Video Style</h3>

    <select id="videoStyle">
        <option>Cinematic</option>
        <option>Realistic</option>
        <option>Animated</option>
        <option>Anime</option>
        <option>3D</option>
        <option>Pixel Art</option>
        <option>Fantasy</option>
        <option>Sci-Fi</option>
    </select>

    <br><br>

    <h3>Quality</h3>

    <select id="videoQuality">
        <option>Draft</option>
        <option>Standard</option>
        <option>High</option>
        <option>Ultra</option>
    </select>

    <br><br>

    <button id="generateVideoBtn">
        🚀 Generate Video
    </button>

    <br><br>

    <div id="videoResult"></div>
    `;
        document
        .getElementById("generateVideoBtn")
        .addEventListener("click", function () {

            const prompt =
                document.getElementById("videoPrompt").value;

            const length =
                document.getElementById("videoLength").value;

            const style =
                document.getElementById("videoStyle").value;

            const quality =
                document.getElementById("videoQuality").value;

            document.getElementById("videoResult").innerHTML = `
                <h2>Video Ready</h2>

                <p><b>Prompt:</b> ${prompt}</p>

                <p><b>Length:</b> ${length}</p>

                <p><b>Style:</b> ${style}</p>

                <p><b>Quality:</b> ${quality}</p>

                <hr>

                <p>🎬 Video generation engine coming soon.</p>
            `;
        });

}
