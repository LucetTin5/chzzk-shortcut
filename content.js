document.addEventListener("keydown", (event) => {
  if (event.target.className !== "live_chatting_input_input__2F3Et") {
    if (event.key === "t" || event.key === "T") {
      const viewModeBtn = document.querySelector(
        ".pzp-pc-viewmode-button__icon"
      );
      if (viewModeBtn) {
        viewModeBtn.click();
      }
    }

    if (event.key === "f" || event.key === "F") {
      const fullScreenBtn = document.querySelector(
        ".pzp-pc-fullscreen-button__icon"
      );
      if (fullScreenBtn) {
        fullScreenBtn.click();
      }
    }
    if (event.key === "m" || event.key === "M") {
      const muteBtn = document.querySelector(".pzp-pc-volume-button__icon");
      if (muteBtn) {
        muteBtn.click();
      }
    }
  }
});
