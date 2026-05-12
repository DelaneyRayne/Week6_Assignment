/* =========================
   WINDOW SIZE TRACKER
========================= */

// Function to update window size
function updateSize() {

    // Get browser width and height
    let width =
        document.documentElement.clientWidth;

    let height =
        document.documentElement.clientHeight;

    // Get selected unit
    let unit =
        document.getElementById("unitSelect").value;

    let displayWidth = width;
    let displayHeight = height;

    // Convert to rem/em
    if (unit === "rem" || unit === "em") {

        let baseFont =
            parseFloat(
                getComputedStyle(
                    document.documentElement
                ).fontSize
            );

        displayWidth =
            (width / baseFont).toFixed(2);

        displayHeight =
            (height / baseFont).toFixed(2);
    }

    // Convert to percentage
    if (unit === "%") {

        displayWidth =
            (
                (width / window.screen.width) * 100
            ).toFixed(1);

        displayHeight =
            (
                (height / window.screen.height) * 100
            ).toFixed(1);
    }

    // Display updated size
    document.getElementById("sizeDisplay").textContent =
        "Width: " + displayWidth + unit +
        " | Height: " + displayHeight + unit;
}

// Run once on page load
updateSize();

// Update when resizing
window.addEventListener(
    "resize",
    updateSize
);

// Update when changing units
document
    .getElementById("unitSelect")
    .addEventListener(
        "change",
        updateSize
    );


/* =========================
   PARALLAX EFFECT
========================= */

/*
Selected Element:
Advertisement sidebar widget
*/
const advertBox =
    document.querySelector(".sidebar");

/*
Event Used:
Window scroll event

*/
window.addEventListener("scroll", function () {

    // Get scroll amount
    let scrollPosition =
        window.scrollY;

    /*
    Increase movement amount
    for a stronger effect
    */
    advertBox.style.transform =
        "translateY(" +
        scrollPosition * 0.3 +
        "px)";
});
