document.addEventListener("DOMContentLoaded", function () {
    function getRandomPosition(element) {
        var x = document.documentElement.clientWidth - element.clientWidth;
        var y = document.documentElement.clientHeight * 0.2 - element.clientHeight; // 20% of height excluding navbar
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    const dots = document.querySelector(".dots");
    const colors = ["blue", "orange", "green", "white"];

    for (let i = 0; i < 100; i++) {
        const dot = document.createElement("div");
        dot.className = colors[Math.floor(Math.random() * colors.length)];
        const [x, y] = getRandomPosition(dot);
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dots.appendChild(dot);
    }

    const spans = document.querySelectorAll('.lang span');
    const radius = 150; // Radius of the circle
    const centerX = 150; // Center X position
    const centerY = 150; // Center Y position
    const totalSpans = spans.length;

    spans.forEach((span, index) => {
        const angle = (index / totalSpans) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle) - span.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - span.offsetHeight / 2;
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;

        // Assign a random font size between 12px and 24px
        const randomFontSize = Math.floor(Math.random() * (24 - 12 + 1)) + 12;
        span.style.fontSize = `${randomFontSize}px`;
    });
});
