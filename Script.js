/* ===============================
   MENU MOBILE
================================ */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* ===============================
   TUTUP MENU SETELAH KLIK
================================ */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


/* ===============================
   EFEK CAHAYA SAAT DISENTUH
================================ */

function createGlow(x, y) {

    const glow = document.createElement("div");

    glow.classList.add("touch-glow");

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 600);
}


/* Untuk mouse */

document.addEventListener("click", (event) => {

    createGlow(
        event.clientX,
        event.clientY
    );

});


/* Untuk layar HP / touchscreen */

document.addEventListener("touchstart", (event) => {

    const touch = event.touches[0];

    createGlow(
        touch.clientX,
        touch.clientY
    );

}, { passive: true });


/* ===============================
   FORM KONTAK
================================ */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Terima kasih! Pesan kamu sudah dikirim."
    );

    form.reset();

});