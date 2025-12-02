const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    alert('Button click');
});

let screw = document.querySelector('.screw');

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

anime({
    targets: '.screw',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true
});


// Elemen
const loginModal = document.getElementById("loginModal");
const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");
const profileMenu = document.getElementById("profileMenu");
const profileName = document.getElementById("profileName");
// Open popup
openLogin.addEventListener("click", () => {
    loginModal.style.display = "flex";
});
// Close popup
closeLogin.addEventListener("click", () => {
    loginModal.style.display = "none";
});


// Login function
document.getElementById("loginBtn").addEventListener("click", function () {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("loginMessage");
    if (user === "admin" && pass === "123") {
        msg.textContent = "Login successful!";
        msg.style.color = "green";
        // Ubah navbar: login hilang, profil tampil
        openLogin.style.display = "none";
        profileMenu.style.display = "flex";
        profileName.textContent = user;
        // Tutup popup setelah 1 detik
        setTimeout(() => {
            loginModal.style.display = "none";
        }, 1000);
    } else {
        msg.textContent = "Wrong username or password!";
        msg.style.color = "red";
    }
});