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