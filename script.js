document.addEventListener("DOMContentLoaded", function () {
    // Tampilkan email di halaman utama (index.html)
    const userInfo = document.getElementById("user-email");
    if (userInfo) {
        const userEmail = localStorage.getItem("userEmail");
        console.log("User Email dari localStorage:", userEmail);
        userInfo.textContent = userEmail ? userEmail : "Guest"; // Jika ada email, tampilkan, jika tidak, tampilkan 'Guest'
    }

    // Event handler untuk login (hanya di halaman login.html)
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // Validasi input
            if (email && password) {
                localStorage.setItem("userEmail", email); // Simpan email ke localStorage
                alert("Login berhasil!");
                window.location.href = "index.html"; // Redirect ke halaman utama
            } else {
                alert("Mohon isi email dan password!"); // Peringatan jika input kosong
            }
        });
    }
});
