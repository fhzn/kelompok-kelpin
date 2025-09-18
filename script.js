// Jika ingin menambahkan interaksi, misal alert saat klik daftar
document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.querySelector('.cta-button');
    if (registerBtn) {
      registerBtn.addEventListener('click', () => {
        // Contoh alert, bisa dihilangkan jika langsung menuju halaman pendaftaran
        // alert('Terima kasih sudah mendaftar! Silakan isi formulir di halaman berikutnya.');
      });
    }
  });