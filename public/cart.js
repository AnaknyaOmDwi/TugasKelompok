const showDescriptionBtn = document.getElementById('showDescriptionBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const deleteBtn = document.getElementById('deleteBtn');

// Event listener untuk menampilkan pop-up
showDescriptionBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

// Event listener untuk menutup pop-up jika overlay diklik
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Event listener untuk mengubah warna tombol hapus menjadi hijau saat diklik
deleteBtn.addEventListener('click', () => {
    deleteBtn.classList.add('green');  // Menambahkan kelas 'green' untuk mengubah warna
    alert('Tombol hapus telah diklik!');
});

const quantityButtons = document.querySelectorAll('.quantity button');

quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button ${button.textContent} clicked`);
        const isIncrement = button.textContent === '+'; // Cek apakah tombol adalah "+"
        const quantitySpan = button.parentElement.querySelector('span'); // Ambil elemen <span> untuk kuantitas
        let currentQuantity = parseInt(quantitySpan.textContent, 10); // Ambil nilai kuantitas saat ini

        // Tambah atau kurangi kuantitas berdasarkan tombol yang diklik
        if (isIncrement) {
            currentQuantity++;
        } else if (currentQuantity > 1) { // Pastikan kuantitas tidak kurang dari 1
            currentQuantity--;
        }

        // Perbarui nilai kuantitas
        quantitySpan.textContent = currentQuantity;
    });
});
