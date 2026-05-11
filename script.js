/* =========================
   WINDOW SIZE TRACKER
========================= */

// Function to update window size
function updateSize() {

    // Browser width and height
    let width =
        document.documentElement.clientWidth;

    let height =
        document.documentElement.clientHeight;

    // Selected unit
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

    // Convert to %
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

    // Display size
    document.getElementById("sizeDisplay").textContent =
        "Width: " + displayWidth + unit +
        " | Height: " + displayHeight + unit;
}

// Run on load
updateSize();

// Update on resize
window.addEventListener(
    "resize",
    updateSize
);

// Update when unit changes
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
Hero image
*/
const heroImage =
    document.querySelector(".hero img");

/*
Scroll Event:
Moves image slightly while scrolling
*/
window.addEventListener("scroll", function () {

    // Scroll amount
    let scrollPosition =
        window.scrollY;

    /*
    Move image slower than page
    for parallax effect
    */
    heroImage.style.transform =
        "translateY(" +
        scrollPosition * 0.2 +
        "px)";
});
