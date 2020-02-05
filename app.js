window.addEventListener('DOMContentLoaded', (event) => {
    const section3 = document.querySelector(".section3");

    const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(entry => {
            if (entry.contentRect.width < 600) {
                entry.target.classList.add("resizing");
            } else {
                entry.target.classList.remove("resizing");
            }
        });
    });

    resizeObserver.observe(section3);
});