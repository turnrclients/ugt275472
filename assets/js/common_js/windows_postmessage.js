// window.addEventListener("message", (event) => {
//         console.log("Message event:", event);
//         if (event.origin !== "https://dev.turnr.co.in") return;
//         localStorage.setItem("featureEnabled", event.data.message);
//         localStorage.setItem("feature_key", event.data.key);
//         localStorage.setItem("owner", event.data.owner);
//         localStorage.setItem("repo_name", event.data.repo_name);
//         document.getElementById("output").textContent = "Received message: " + JSON.stringify(event.data);
//         event.source.postMessage({ reply: "Got your message!" }, event.origin);

//       });


window.addEventListener("message", (event) => {
    console.log("Message event:", event);

    // SECURITY: Only accept messages from parent domain
    if (event.origin !== "https://dev.turnr.co.in") return;

    // Save the data to localStorage
    localStorage.setItem("featureEnabled", event.data.message);
    localStorage.setItem("feature_key", event.data.key);
    localStorage.setItem("owner", event.data.owner);
    localStorage.setItem("repo_name", event.data.repo_name);

    // Display for debugging
    document.getElementById("output").textContent = 
        "Received message: " + JSON.stringify(event.data);

    // 🔥 RUN FEATURE LOGIC HERE
    if (event.data.message === "false") {
        showCustomAlertBox('error', 'Feature is disabled');
        return;
    }

    createButtons();  // <-- only run after message is received

    // Reply to parent
    event.source.postMessage({ reply: "Got your message!" }, event.origin);
});
