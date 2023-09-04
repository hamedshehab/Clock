  function updateTime() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
    document.getElementById("time").innerText = formattedTime;
  }

  function padNumber(number) {
    return number.toString().padStart(2, "0");
  }

  // Update time every second
  setInterval(updateTime, 1000);