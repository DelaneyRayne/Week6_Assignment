function updateSize() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    document.getElementById("sizeDisplay").textContent =
        "Width: " + width + "px | Height: " + height + "px";
}

updateSize();
window.addEventListener("resize", updateSize);
