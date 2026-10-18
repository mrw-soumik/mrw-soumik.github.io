// Mobile navigation and copy-to-clipboard. The site works without JavaScript;
// these only add convenience.
(function () {
    "use strict";

    var toggle = document.querySelector(".nav-toggle");
    var links = document.getElementById("nav-links");

    function setOpen(open) {
        links.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
    }

    if (toggle && links) {
        toggle.addEventListener("click", function () {
            setOpen(toggle.getAttribute("aria-expanded") !== "true");
        });
        links.addEventListener("click", function (event) {
            if (event.target.closest("a")) setOpen(false);
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
                setOpen(false);
                toggle.focus();
            }
        });
    }

    document.querySelectorAll(".copy-btn").forEach(function (button) {
        var status = button.parentElement.querySelector("[role='status']");
        button.addEventListener("click", function () {
            var text = button.getAttribute("data-copy");
            var done = function (message) {
                button.textContent = message;
                if (status) status.textContent = message;
                setTimeout(function () { button.textContent = "Copy"; }, 2000);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(
                    function () { done("Copied"); },
                    function () { done("Press Ctrl+C to copy"); }
                );
            } else {
                done("Press Ctrl+C to copy");
            }
        });
    });
})();

// Open collapsed sections when a link points at them (for example /#more-projects).
(function () {
    function openTarget() {
        if (!location.hash) return;
        var target = document.getElementById(location.hash.slice(1));
        if (!target) return;
        target.querySelectorAll("details[data-autoopen]").forEach(function (d) { d.open = true; });
    }
    window.addEventListener("hashchange", openTarget);
    openTarget();
})();
