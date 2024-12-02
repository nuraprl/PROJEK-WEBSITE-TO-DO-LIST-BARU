// Menyimpan data pendaftaran
if (window.location.pathname.includes('hal2.html')) {
    const formDaftar = document.querySelector('.form-daftar form');
    formDaftar.addEventListener('submit', function (e) {
        e.preventDefault(); // mencegah form refresh halaman

        // mengambil data email dan password dari input
        const email = formDaftar.querySelector('input[type="email"]').value;
        const password = formDaftar.querySelector('input[type="password"]').value;

        // mengecek apakah ada data di localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const isUserExists = users.some(user => user.email === email);

        if (isUserExists) {
            alert('Email sudah terdaftar! Silakan gunakan email lain.');
        } else {
            // menyimpan data ke localStorage
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registrasi berhasil! Silakan login.');
            window.location.href = 'hal3.html'; // Redirect ke halaman login
        }
    });
}

// verifikasi dftr login
if (window.location.pathname.includes('hal3.html')) {
    const formLogin = document.querySelector('.form-daftar form');
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah form refresh halaman

        // mengambil data email dan password dari input
        const email = formLogin.querySelector('input[type="email"]').value;
        const password = formLogin.querySelector('input[type="password"]').value;

        // mengambil data user dari local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email);

        if (user) {
            if (user.password === password) {
                alert('Login berhasil!');
                // kembali ke halaman utama
                window.location.href = 'index.html';
            } else {
                alert('Password salah!');
            }
        } else {
            alert('Email belum terdaftar! Silakan daftar terlebih dahulu.');
        }
    });
}