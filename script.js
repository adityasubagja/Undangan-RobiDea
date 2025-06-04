// Tanggal target acara pernikahan
    const targetDate = new Date("2025-06-11T08:00:00+07:00").getTime();

    // Fungsi untuk update countdown
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        document.getElementById("countdown").innerHTML = "💍 Acara sedang berlangsung!";
        return;
      }

      // Hitung hari, jam, menit, detik
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Tampilkan countdown
      document.getElementById("countdown").innerHTML =
        `⏳ Acara dimulai dalam: ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
    }

    // Perbarui setiap 1 detik
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Fungsi buka undangan: tutup popup, mainkan musik
    function bukaUndangan() {
      document.getElementById('popup').style.display = 'none';
      const musik = document.getElementById("bgMusic");
      musik.play().catch(error => console.log("Autoplay gagal:", error));
      document.body.style.overflow = "auto";
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Sembunyikan scroll saat popup masih muncul
    document.body.style.overflow = "hidden";

    // Ambil nama tamu dari URL (?to=Nama) dan tampilkan
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('to');
    if (nama) {
      document.getElementById('namaTamu').textContent = decodeURIComponent(nama);
    }

    // Efek animasi saat scroll ke bagian tertentu
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          sec.classList.add('appear');
        }
      });
    });