const subSections = document.querySelectorAll("#playground .sub-effects");
const effectButtons = document.querySelectorAll("#playground .effect-button");
const previewBox = document.getElementById("previewBox");

function showSubEffects(index, btn) {
  subSections.forEach(sec => sec.classList.remove("show"));
  effectButtons.forEach(b => b.classList.remove("active"));
  document.querySelectorAll("#playground .sub-effect").forEach(s => s.classList.remove("active"));
  document.getElementById(`sub-effects-${index}`).classList.add("show");
  btn.classList.add("active");
  document.getElementById("cssContent").innerText = "/* CSS will appear here */";
  resetPreviewBox();
}

function selectSubEffect(css, elem) {
  document.querySelectorAll("#playground .sub-effect").forEach(e => e.classList.remove("active"));
  elem.classList.add("active");

  const cssFormatted = Object.entries(css)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");
  document.getElementById("cssContent").innerText = cssFormatted;

  resetPreviewBox();

  Object.entries(css).forEach(([key, value]) => {
    previewBox.style[key] = value;
  });
}

function copyCSS() {
  const cssText = document.getElementById("cssContent").innerText;
  navigator.clipboard.writeText(cssText).then(() => {
    alert("CSS copied to clipboard!");
  });
}

function resetPreviewBox() {
  previewBox.removeAttribute("style");
  previewBox.style.width = "150px";
  previewBox.style.height = "150px";
  previewBox.style.backgroundColor = "var(--green-color)";
  previewBox.style.color = "white";
  previewBox.style.display = "flex";
  previewBox.style.alignItems = "center";
  previewBox.style.justifyContent = "center";
  previewBox.style.transition = "all 0.5s ease";
  previewBox.innerText = "Preview";
}

window.addEventListener("DOMContentLoaded", () => {
  const firstMainBtn = effectButtons[0];
  if (firstMainBtn) {
    showSubEffects(0, firstMainBtn);

    setTimeout(() => {
      const firstSub = document.querySelector("#sub-effects-0 .sub-effect");
      if (firstSub) {
        const cssData = JSON.parse(firstSub.getAttribute('onclick').match(/selectSubEffect\((.*), this\)/)[1]);
        selectSubEffect(cssData, firstSub);
      }
    }, 50);
  }
});
