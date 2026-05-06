function updateSize() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    let unit = document.getElementById("unitSelect").value;

    let displayWidth = width;
    let displayHeight = height;

    // Convert units
    if (unit === "rem" || unit === "em") {
        let baseFont = parseFloat(getComputedStyle(document.documentElement).fontSize);
        displayWidth = (width / baseFont).toFixed(2);
        displayHeight = (height / baseFont).toFixed(2);
    }

    if (unit === "%") {
        displayWidth = ((width / window.screen.width) * 100).toFixed(1);
        displayHeight = ((height / window.screen.height) * 100).toFixed(1);
    }

    document.getElementById("sizeDisplay").textContent =
        "Width: " + displayWidth + unit + " | Height: " + displayHeight + unit;
}

// Run on load
updateSize();

// Update on resize
window.addEventListener("resize", updateSize);

// Update when unit changes
document.getElementById("unitSelect").addEventListener("change", updateSize);
