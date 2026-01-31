tampilkanWelcome();

function tampilkanWelcome() {
    let namaPengguna = prompt("Welcome to BoxLine Company! What is your name?");
    if (namaPengguna === null || namaPengguna.trim() === "") {
        namaPengguna = "Guest";
    }

    const teksWelcome = document.getElementById("welcomeText");
    teksWelcome.innerText = `Hello, ${namaPengguna}! Welcome to BoxLine Company`;

    setTimeout(() => {
        const layarWelcome = document.getElementById("welcome-screen");
        layarWelcome.style.display = "none";
    }, 3000);
}

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || telepon === "" || pesan === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (isNaN(telepon)) {
        alert("Phone number must contain only numbers.");
        return;
    }

    const waktu = new Date().toLocaleString();

    const hasil = document.getElementById("hasil");
    hasil.classList.add("show");
    hasil.innerHTML = `
        <h3>Your Message</h3>
        <p><strong>Name:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${telepon}</p>
        <p><strong>Message:</strong> ${pesan}</p>
        <p><em>Submitted at: ${waktu}</em></p>
    `;
    hasil.style.display = "block"
    form.reset();
});

