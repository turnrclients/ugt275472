window.addEventListener("message", (event) => {
        console.log("Message event:", event);
        if (event.origin !== "https://dev.turnr.co.in") return;
        localStorage.setItem("featureEnabled", event.data.message);
        localStorage.setItem("feature_key", event.data.key);
        localStorage.setItem("owner", event.data.owner);
        localStorage.setItem("repo_name", event.data.repo_name);
        document.getElementById("output").textContent = "Received message: " + JSON.stringify(event.data);
        if (event.data.message !== "false") {
        // This ensures the DOM is fully ready
        setTimeout(() => createButtons(), 0);
    } else {
        showCustomAlertBox('error', 'Feature is disabled');
    }
        event.source.postMessage({ reply: "Got your message!" }, event.origin);

      });

