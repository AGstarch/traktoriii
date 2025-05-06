//Egles//
function drawThree(height) {
for (let i = 0; i < height; i++) {
const spaces =''.repeat(height - i - 1);
const stars ='*'.repeat(2 * i + 1);
console.log(spaces + stars);
  }
}
//konstants mainīgais sniegs
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const snowflakes = [];
for (let i = 0; i < 200; i++) {
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
    });
    // Sniega krišanas ātrums//
}
function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach((flake) => {
        const gradient = ctx.createRadialGradient(
            flake.x,
            flake.y,
            0,
            flake.x,
            flake.y,
            flake.radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
    });
    
}
// Random vietas kur kritīs sniegs //

function updateSnowflakes() {
    snowflakes.forEach((flake) => {
        flake.y += flake.speed; // Move down by speed.
        if (flake.y > canvas.height) { // Reset position if off-screen.
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    });
}
// Animācija kā krīt sniegs
function animate() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(animate);
}

animate();


