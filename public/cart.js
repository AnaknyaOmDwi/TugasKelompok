
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
        console.log(dataP.data)

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

// Tampilkan data
async function tampilkanData(dataS,dataP) {
    const container = document.getElementById("cart_id"); // Asumsikan ada div dengan id="data-container" sebagai wadah.
    
    dataS.forEach(shop => {
        // Buat elemen toko
        const tokoDiv = document.createElement("div");
        tokoDiv.className = "toko tw-flex tw-justify-start tw-rounded-lg gap-2";

        tokoDiv.innerHTML = `
                    <label for="checkbox-toko${shop.id}">
                <input type="checkbox" id="checkbox-toko${shop.id}" name="checkbox-toko${shop.id}" />
            </label>
            <div class="tw-flex gap-1">
                <img src="${shop.shop_photo}" class="tw-rounded-full" width="25px" alt="${shop.shop_name}" />
                ${shop.shop_name}
            </div>

        `;
        container.appendChild(tokoDiv);
        const id_toko = shop.id
        const checkboxShop = tokoDiv.querySelector(`#checkbox-toko${shop.id}`);

        //  produk dalam toko
        const produkToko = dataP.filter(product => product.shop_id === id_toko);
        produkToko.forEach(item => {
            const produkDiv = document.createElement("div");
            produkDiv.className = "tw-flex tw-justify-between tw-items-center gap-3";
            const textReplace = item.description.replace(/[\r]+/g, '<br>')  // Ganti \r\n
        
            produkDiv.innerHTML = `
    <div class="tw-flex gap-4" id="product">
        <div>
            <label for="checkbox-product${item.id}">
                <input type="checkbox" id="checkbox-product${item.id}" name="checkbox-product${item.id}" data-product-id="${item.id}" data-shop-id="${item.shop_id}" />

            </label>
        </div>
        <div class="product-details tw-flex gap-2">
            <img src="${item.product_photo}" width="150px" alt="${item.product_name}" />
            <div class="tw-flex tw-flex-col gap-4 p-1">
                <h2 class="poppins-regular tw-text-[16px]">${item.product_name}</h2>
                <div class="description tw-flex tw-flex-col" id="comment1">
                <p> ${textReplace} </p>
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
    const checkboxProduct = produkDiv.querySelector(`#checkbox-product${item.id}`);
    //Mencari elemen checkbox untuk produk tertentu di dalam elemen produkDiv berdasarkan ID uniknya (checkbox-product${item.id}).

   //Memastikan elemen checkbox untuk produk (checkboxProduct) ada sebelum menambahkan event listener.
    if (checkboxProduct) {
        // /Menambahkan event listener untuk menangani perubahan status checkbox produk.
        checkboxProduct.addEventListener('change', () => {
            updateCheckProduct(item.id, checkboxProduct.checked);//dipanggil untuk memperbarui status produk di database
            updateShopCheckboxState(id_toko);//dipanggil untuk memperbarui status checkbox toko sesuai dengan status semua produk dalam toko tersebut.
        });
    }
    if (checkboxShop) {//Memastikan elemen checkbox untuk toko (checkboxShop) true sebelum menambahkan event listener.
        checkboxShop.addEventListener('change', () => {
            const isChecked = checkboxShop.checked;

            // Perbarui status toko di database
            updateCheckShop(shop.id, isChecked);//dipanggil untuk memperbarui status toko di database.

            // Ambil semua checkbox produk dalam toko ini
            const productCheckboxes = container.querySelectorAll(`[data-shop-id="${id_toko}"]`);
    
            productCheckboxes.forEach(checkbox => {
                if (checkbox.checked !== isChecked) {
                    checkbox.checked = isChecked;
                    const productId = checkbox.getAttribute('data-product-id');
                    console.log("Product ID:", productId); // Debugging
                    updateCheckProduct(productId, isChecked);//Jika status produk berbeda dari status toko, produk akan diperbarui menggunakan ini
                }
            });
        });
    }
    
    if (id_toko === item.shop_id){//Memastikan produk yang sedang diproses (item.shop_id) memang milik toko yang sedang ditampilkan (id_toko).
    container.appendChild(produkDiv);//Menambahkan elemen produk (produkDiv) ke dalam elemen container.
    const hr = document.createElement("hr");//Membuat elemen horizontal line (<hr>) untuk memisahkan produk atau elemen dalam tampilan.
    container.appendChild(hr);//Menambahkan elemen horizontal line (<hr>) ke dalam elemen container setelah produk.
    }
});
    });
    toggleTextLimitForAll('.description', 50);

}

// Centang Toko
function updateShopCheckboxState(shopId) {//Fungsi untuk memperbarui status checkbox toko berdasarkan status checkbox produk di dalam toko.
    const productCheckboxes = document.querySelectorAll(`[data-shop-id="${shopId}"]`);//Mencari semua checkbox produk yang terkait dengan toko ([data-shop-id="${shopId}"]).
    const shopCheckbox = document.querySelector(`#checkbox-toko${shopId}`);

    // Periksa apakah semua checkbox produk dalam toko dicentang
    const allChecked = Array.from(productCheckboxes).every(checkbox => checkbox.checked);//Mengecek apakah semua checkbox produk dicentang.

    if (shopCheckbox) {
        shopCheckbox.checked = allChecked; // Set status checkbox toko
        updateCheckShop(shopId, allChecked); //Jika semua dicentang, checkbox toko akan dicentang, dan status toko diperbarui di database menggunakan updateCheckShop
    }
}

const checkboxAll = document.getElementById("checkbox-all");//Mengambil elemen checkbox "Pilih Semua" berdasarkan ID (checkbox-all).

if (checkboxAll) {//Memastikan elemen "Pilih Semua" (checkboxAll) true sebelum menambahkan event listener.
    checkboxAll.addEventListener("change", () => {
        const isChecked = checkboxAll.checked;

        const shopCheckboxes = document.querySelectorAll('input[id^="checkbox-toko"]');//Mencari semua checkbox toko berdasarkan ID yang diawali dengan checkbox-toko
        shopCheckboxes.forEach(shopCheckbox => {
            const shopId = shopCheckbox.id.replace('checkbox-toko', '');
            if (!shopId) {
                console.error("Shop ID is undefined for checkbox:", shopCheckbox);
                return;
            }

            shopCheckbox.checked = isChecked;
            updateCheckShop(shopId, isChecked);//Fungsi untuk memperbarui status toko di database berdasarkan shopId dan status (isChecked).

            //Semua checkbox produk di dalam setiap toko juga diperbarui untuk mencocokkan status toko.
            const productCheckboxes = document.querySelectorAll(`input[data-shop-id="${shopId}"]`);
            productCheckboxes.forEach(productCheckbox => {
                const productId = productCheckbox.dataset.productId;
                if (!productId) {
                    console.error("Product ID is undefined for checkbox:", productCheckbox);
                    return;
                }

                productCheckbox.checked = isChecked;
                updateCheckProduct(productId, isChecked);//Fungsi untuk memperbarui status produk di database berdasarkan productId dan status (isChecked).
            });
        });
    });
}
// Fungsi untuk memperbarui status checkbox produk di server
async function updateCheckProduct(productId, isChecked) {
    try {
        const response = await fetch(`http://localhost:3000/products/${productId}`, {
            method: 'PUT', // Gunakan metode PATCH atau PUT
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                check_product: isChecked ? 1 : 0
            })
        });

        if (response.ok) {
            console.log(`Product ID ${productId} updated successfully!`);
        } else {
            console.error(`Failed to update Product ID ${productId}`);
        }
    } catch (error) {
        console.error('Error updating product:', error);
    }
}
// Fungsi untuk memperbarui status checkbox Shop di server
async function updateCheckShop(shopId, isChecked) {
    try {
        const response = await fetch(`http://localhost:3000/shop/${shopId}`, {
            method: 'PUT', // Gunakan metode PATCH atau PUT
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                check_toko: isChecked ? 1 : 0
            })
        });

        if (response.ok) {
            console.log(`Shop ID ${shopId} updated successfully!`);
        } else {
            console.error(`Failed to update Product ID ${shopId}`);
        }
    } catch (error) {
        console.error('Error updating product:', error);
    }
}



fetchData()
