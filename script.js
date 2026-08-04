// ===== Linear AI =====

const content = document.getElementById("content");

// ---------- Home ----------
function showHome() {
    content.innerHTML = `
        <h1>Welcome to Linear AI</h1>
        <p>Your AI Creation Studio</p>
    `;
}

// ---------- Chat ----------
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

    document
        .getElementById("userInput")
        .addEventListener("keydown", function(event){
            if(event.key==="Enter"){
                sendMessage();
            }
        });
}

function sendMessage(){

    const input=document.getElementById("userInput");
    const messages=document.getElementById("messages");

    if(!input || !messages) return;

    if(input.value.trim()==="") return;

    messages.innerHTML+=`
        <div class="user-message">
            ${input.value}
        </div>

        <div class="bot-message">
            I'm still under construction 🤖
        </div>
    `;

    input.value="";
}

// ---------- Image ----------
function showImage(){

    content.innerHTML=`
        <h1>🖼 Image Studio</h1>

        <p>Create amazing AI images.</p>

        <br>

        <textarea
            rows="6"
            style="width:80%;max-width:700px;padding:15px;border-radius:12px;"
            placeholder="Describe the image you want..."
        ></textarea>

        <br><br>

        <button class="button">
            Generate Image
        </button>
    `;
}

// ---------- Video ----------
function showVideo(){

    content.innerHTML=`
        <h1>🎥 Video Studio</h1>

        <p>Create AI videos.</p>

        <br>

        <textarea
            rows="6"
            style="width:80%;max-width:700px;padding:15px;border-radius:12px;"
            placeholder="Describe your video..."
        ></textarea>

        <br><br>

        <label>Video Length</label>

        <br>

        <select style="padding:10px;border-radius:10px;">
            ${Array.from({length:30},(_,i)=>`<option>${i+1} minute${i? 's':''}</option>`).join("")}
        </select>

        <br><br>

        <button class="button">
            Generate Video
        </button>
    `;
}

// ---------- Placeholder Pages ----------

function simplePage(title,text){

    content.innerHTML=`
        <h1>${title}</h1>
        <p>${text}</p>
    `;
}

// ---------- Button Events ----------

document.getElementById("homeBtn").onclick=showHome;

document.getElementById("chatBtn").onclick=showChat;

document.getElementById("imageBtn").onclick=showImage;

document.getElementById("videoBtn").onclick=showVideo;

document.getElementById("audioBtn").onclick=function(){
    simplePage("🎵 Audio Studio","Coming soon.");
};

document.getElementById("docsBtn").onclick=function(){
    simplePage("📄 Documents","Coming soon.");
};

document.getElementById("codeBtn").onclick=function(){
    simplePage("💻 Code","Coming soon.");
};

document.getElementById("projectsBtn").onclick=function(){
    simplePage("📁 Projects","Coming soon.");
};

document.getElementById("settingsBtn").onclick=function(){
    simplePage("⚙️ Settings","Coming soon.");
};

// ---------- Start ----------

showHome();
