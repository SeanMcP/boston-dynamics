(function main() {
  const spotEl = document.getElementById("spot");
  const backgroundEl = document.getElementById("background");

  window.addEventListener("change", ({ target }) => {
    if (target.name) {
      switch (target.name) {
        case "background": {
          backgroundEl.style.backgroundImage =
            target.parentNode.style.getPropertyValue("--background");
          break;
        }
        case "body": {
          spotEl.style = `--body-color: ${target.parentNode.style.getPropertyValue(
            "--color"
          )}`;
          break;
        }
      }
    }
  });
})();
