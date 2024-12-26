
// const showDescriptionBtns = document.querySelectorAll('.showDescriptionBtn');
// const popup = document.getElementById('popup');
// const overlay = document.getElementById('overlay');
const deleteBtn = document.getElementById('delete-product'); // ID sesuai dengan HTML Anda

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cart_id');

    // // Delegasi event untuk link deskripsi produk
    // if (container) {
    //     container.addEventListener('click', (e) => {
    //         const link = e.target.closest('a'); // Cari elemen <a> yang diklik
    //         if (link && link.dataset.productId) {
    //             const productId = link.dataset.productId;
    //             const popup = document.getElementById(`popup-${productId}`);
    //             if (popup) {
    //                 popup.style.display = 'block';
    //             }
    //         }
    //     });
    // }

    // // Delegasi event untuk tombol close popup
    // container.addEventListener('click', (e) => {
    //     const closeBtn = e.target.closest('.closePopup');
    //     if (closeBtn && closeBtn.dataset.productId) {
    //         const productId = closeBtn.dataset.productId;
    //         const popup = document.getElementById(`popup-${productId}`);
    //         if (popup) {
    //             popup.style.display = 'none';
    //         }
    //     }
    // });
    // Fungsi untuk melimit teks dan mengelola toggle "lihat selengkapnya"
    window.onload = function () {
        toggleTextLimit('comment1', 50);
    };
    
});


// Event listener untuk mengubah warna tombol hapus menjadi hijau saat diklik
if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
        deleteBtn.classList.add('green');  // Menambahkan kelas 'green' untuk mengubah warna
        alert('Tombol hapus telah diklik!');
    });
}

// Tambahkan validasi dan event listener lainnya sesuai kebutuhan






const quantityButtons = document.querySelectorAll('.quantity button');

quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button ${button.textContent} clicked`);
        const increment = button.textContent === '+';
        const quantitySpan = button.parentElement.querySelector('span'); 
        let currentQuantity = parseInt(quantitySpan.textContent, 10); 

        if (increment) {
            currentQuantity++;
        } else if (currentQuantity > 1) { 
            currentQuantity--;
        }

        // Perbarui nilai kuantitas
        quantitySpan.textContent = currentQuantity;
    });
});

// const closePopupBtn = document.getElementById('closePopup');

// Tes

async function fetchData() {
    try {
        const [responseS, responseP] = await Promise.all([
            fetch('http://localhost:3000/api/toko'),
            fetch('http://localhost:3000/api/products')
        ]);

        const dataS = await responseS.json();
        const dataP = await responseP.json();

        if (dataS.data && dataP.data) {
            tampilkanData(dataS.data, dataP.data);
        } else {
            console.error('Error: Data format is incorrect');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function toggleTextLimitForAll(selector, maxLength) {
    const elements = document.querySelectorAll(selector); // Pilih semua elemen dengan selector
    elements.forEach((element) => {
        if (!element) return;

        // Simpan teks asli jika belum disimpan
        const fullText = element.getAttribute('data-full-text') || element.textContent.trim();

        if (!element.getAttribute('data-full-text')) {
            element.setAttribute('data-full-text', fullText);
        }

        // Batasi teks jika melebihi maxLength
        if (fullText.length > maxLength) {
            const truncatedText = fullText.slice(0, maxLength) + '...';
            element.setAttribute('data-truncated-text', truncatedText);
            element.textContent = truncatedText;

            // Buat tombol toggle
            const toggleButton = document.createElement('span');
            toggleButton.style.color = 'grey';
            toggleButton.style.cursor = 'pointer';
            toggleButton.style.display = 'inline-flex';
            toggleButton.style.alignItems = 'center';
            toggleButton.setAttribute('data-state', 'collapsed');

            // Tambahkan teks "lihat selengkapnya" dan ikon SVG
            toggleButton.innerHTML = `
                lihat selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            `;

            // Tambahkan event listener ke tombol toggle
            toggleButton.onclick = function () {
                const state = toggleButton.getAttribute('data-state');
                if (state === 'collapsed') {
                    element.textContent = fullText;
                    toggleButton.innerHTML = `
                        tutup
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5z" />
                            <path fill-rule="evenodd"
                                d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z" />
                        </svg>
                    `;
                    toggleButton.setAttribute('data-state', 'expanded');
                } else {
                    element.textContent = element.getAttribute('data-truncated-text');
                    toggleButton.innerHTML = `
                        lihat selengkapnya
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    `;
                    toggleButton.setAttribute('data-state', 'collapsed');
                }
                element.appendChild(toggleButton);
            };

            // Tambahkan tombol ke elemen
            element.appendChild(toggleButton);
        }
    });
}



async function tampilkanData(dataS,dataP) {
    const container = document.getElementById("cart_id"); // Asumsikan ada div dengan id="data-container" sebagai wadah.


    dataS.forEach(item => {
        // Buat elemen toko
        const tokoDiv = document.createElement("div");
        tokoDiv.className = "toko tw-flex tw-justify-start tw-rounded-lg gap-2";

        tokoDiv.innerHTML = `
                    <label for="checkbox-toko${item.id}">
                <input type="checkbox" id="checkbox-toko${item.id}" name="checkbox-toko${item.id}" />
            </label>
            <div class="tw-flex gap-1">
                <img src="${item.shop_photo}" class="tw-rounded-full" width="25px" alt="${item.shop_name}" />
                ${item.shop_name}
            </div>

        `;
        container.appendChild(tokoDiv);
        getComputedStyle(tokoDiv);
        const id_toko = item.id

        //  produk dalam toko
        const produkToko = dataP.filter(product => product.shop_id === id_toko);
        produkToko.forEach(item => {
            const produkDiv = document.createElement("div");
            produkDiv.className = "tw-flex tw-justify-between tw-items-center gap-3";
            
        
            produkDiv.innerHTML = `
    <div class="tw-flex gap-4" id="product">
        <div>
            <label for="checkbox-product${item.id}">
                <input type="checkbox" id="checkbox-product${item.id}" name="checkbox-product${item.id}" />
            </label>
        </div>
        <div class="product-details tw-flex gap-2">
            <img src="${item.product_photo}" width="150px" alt="${item.product_name}" />
            <div class="tw-flex tw-flex-col gap-4 p-1">
                <h2 class="poppins-regular tw-text-[16px]">${item.product_name}</h2>
                <div class="description tw-flex tw-flex-col" id="comment1">
                <p>Deskripsi : 
                <p> ${item.description} </p>
                </div>
            </div>
        </div>
        </div>
        <div class="priceQuantity">
            <p class="price">${item.product_price}</p>
            <div class="quantity">
                <button>-</button>
                <span>${item.quantity}</span>
                <button>+</button>
            </div>
        </div>
    `;
    // <!-- Popup hanya untuk produk ini -->
    // <div class="popup" id="popup-${item.id}" style="display: none;">
    //     <button class="closePopup close-btn" data-product-id="${item.id}">x</button>
    //     <p>${item.description}</p>
    // </div>
            if (id_toko === item.shop_id){
            container.appendChild(produkDiv);
            const hr = document.createElement("hr");
            container.appendChild(hr);
            }
        });
    });
    toggleTextLimitForAll('.description', 50);
}
fetchData()
