const showDescriptionBtn = document.getElementById('showDescriptionBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const deleteBtn = document.getElementById('deleteBtn');

// Event listener untuk menampilkan pop-up
// showDescriptionBtn.addEventListener('click', () => {
//     popup.style.display = 'block';
//     overlay.style.display = 'block';
// });

// Event listener untuk menutup pop-up jika overlay diklik
// overlay.addEventListener('click', () => {
//     popup.style.display = 'none';
//     overlay.style.display = 'none';
// });

// Event listener untuk mengubah warna tombol hapus menjadi hijau saat diklik
// deleteBtn.addEventListener('click', () => {
//     deleteBtn.classList.add('green');  // Menambahkan kelas 'green' untuk mengubah warna
//     alert('Tombol hapus telah diklik!');
// });

// Event listener untuk menutup pop-up saat tombol cancel diklik
// closePopupBtn.addEventListener('click', () => {
//     popup.style.display = 'none';
//     overlay.style.display = 'none';
// });

const quantityButtons = document.querySelectorAll('.quantity button');

quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button ${button.textContent} clicked`);
        const isIncrement = button.textContent === '+';
        const quantitySpan = button.parentElement.querySelector('span'); 
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
const closePopupBtn = document.getElementById('closePopup');

// Tes

async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        // tampilkanData(data.data);
        console.log(data.data)
    } catch (error) {
        console.error('Error:', error);
    }
}
// async function tampilkanData(data) {
//     const container = document.getElementById("cart_id"); // Asumsikan ada div dengan id="data-container" sebagai wadah.

//     data.forEach(item => {
//         // Buat elemen toko
//         const tokoDiv = document.createElement("div");
//         tokoDiv.className = "toko tw-flex tw-justify-start tw-rounded-lg gap-2";

//         tokoDiv.innerHTML = `
//                     <label for="checkbox-toko${item.id}">
//                 <input type="checkbox" id="checkbox-toko${item.id}" name="checkbox-toko${item.id}" />
//             </label>
//             <div class="tw-flex gap-1">
//                 <img src="${item.shop_photo}" class="tw-rounded-full" width="25px" alt="${item.shop_name}" />
//                 ${item.shop_name}
//             </div>

//         `;

//         container.appendChild(tokoDiv);

//         //  produk dalam toko
//         // data.forEach(item => {
//         //     const produkDiv = document.createElement("div");
//         //     produkDiv.className = "produk tw-flex tw-justify-between tw-items-center gap-3";
//         //     produkDiv.style.width = "100px";
        
//         //     produkDiv.innerHTML = `
//         //         <div class="tw-flex gap-4" id="product">
//         //             <div>
//         //                 <label for="checkbox-product${item.id}">
//         //                     <input type="checkbox" id="checkbox-product${item.id}" name="checkbox-product${item.id}" />
//         //                 </label>
//         //             </div>
//         //             <div class="product-details tw-flex gap-2">
//         //                 <img src="${item.product_photo}" width="150px" alt="${item.product_name}" />
//         //                 <div class="tw-flex tw-flex-col tw-justify-between p-1">
//         //                     <h2 class="poppins-regular tw-text-[16px]">${item.product_name}</h2>
//         //                     <div id="showDescriptionBtn">
//         //                         <a class="icon-link icon-link-hover tw-underline link-underline-secondary" href="${item.description}">
//         //                             Deskripsi Produk
//         //                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//         //                                 class="bi bi-arrow-right" viewBox="0 0 16 16">
//         //                                 <path fill-rule="evenodd"
//         //                                     d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
//         //                             </svg>
//         //                         </a>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //         <div class="priceQuantity">
//         //             <p class="price">${item.product_price}</p>
//         //             <div class="quantity">
//         //                 <button>-</button>
//         //                 <span>${item.quantity}</span>
//         //                 <button>+</button>
//         //             </div>
//         //         </div>
//         //     `;
        
//         //     container.appendChild(produkDiv);
//         // });
//     });
// }
fetchData();