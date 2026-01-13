//your JS code here. If required.
function updateTimer() {
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    document.getElementById("timer").textContent = formatted;
    }
    updateTimer();
    setInterval(updateTimer, 1000);
