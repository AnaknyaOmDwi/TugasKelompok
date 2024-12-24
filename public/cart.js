
const showDescriptionBtns = document.querySelectorAll('.showDescriptionBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const deleteBtn = document.getElementById('delete-product'); // ID sesuai dengan HTML Anda

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cart_id');

    // Delegasi event untuk link deskripsi produk
    if (container) {
        container.addEventListener('click', (e) => {
            const link = e.target.closest('a'); // Cari elemen <a> yang diklik
            if (link && link.dataset.productId) {
                const productId = link.dataset.productId;
                const popup = document.getElementById(`popup-${productId}`);
                if (popup) {
                    popup.style.display = 'block';
                }
            }
        });
    }

    // Delegasi event untuk tombol close popup
    container.addEventListener('click', (e) => {
        const closeBtn = e.target.closest('.closePopup');
        if (closeBtn && closeBtn.dataset.productId) {
            const productId = closeBtn.dataset.productId;
            const popup = document.getElementById(`popup-${productId}`);
            if (popup) {
                popup.style.display = 'none';
            }
        }
    });
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
            <div class="tw-flex tw-flex-col tw-justify-between p-1">
                <h2 class="poppins-regular tw-text-[16px]">${item.product_name}</h2>
                <div class="showDescriptionBtn">
                    <a class="icon-link icon-link-hover tw-underline link-underline-secondary" href="#" data-product-id="${item.id}">
                        Deskripsi Produk
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </a>
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
    <!-- Popup hanya untuk produk ini -->
    <div class="popup" id="popup-${item.id}" style="display: none;">
        <button class="closePopup close-btn" data-product-id="${item.id}">x</button>
        <p>${item.description}</p>
    </div>
`;

            if (id_toko === item.shop_id){
            container.appendChild(produkDiv);
            const hr = document.createElement("hr");
            container.appendChild(hr);
            }
        });
    });
}
fetchData()