
const totalPrice = localStorage.getItem('totalPrice');
document.addEventListener('DOMContentLoaded', () => {
    async function total(isChecked) {
        try {
            const response = await fetch(`http://localhost:3000/api/products/check?check_product=${isChecked ? 1 : 0}`);
            if (response.ok) {
                const dataPC = await response.json();
                let totalsemua = 0;

                dataPC.data.forEach(item => {
                    if (item.check_product === 1) {
                        const hargaSetelahDiskon =
                            item.diskon > 0
                                ? (item.product_price * item.quantity) * (1 - item.diskon / 100)
                                : (item.product_price * item.quantity);
                        totalsemua += hargaSetelahDiskon;
                    }
                });

                const iniTotal = document.getElementById('total');
                iniTotal.innerHTML = `Rp.${parseInt(totalPrice).toLocaleString()}`;

                const discountGet = document.getElementById('disc');
                let ongkos = 15000
                diskonGet = totalPrice - totalsemua
                discountGet.innerHTML = `Rp.${diskonGet.toLocaleString()}`;
                
                const ongkir = document.getElementById('ongkir')
                ongkir.innerHTML = `Rp.${ongkos.toLocaleString()}`;

                totalakhir = totalsemua - ongkos
                const last = document.getElementById('last')
                last.innerHTML = `Rp.${totalakhir.toLocaleString()}`;


            } else {
                console.error('Failed to fetch product data.');
            }
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

    total(true); // Perbaikan: Tambahkan parameter

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
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function tampilkanData(dataS, dataP) {
        const container = document.getElementById("cart_id");
        if (!container) {
            console.error("Element with id 'cart_id' not found.");
            return;
        }

        dataS.forEach(shop => {
            const id_toko = shop.id;
            const tokoDiv = document.createElement("div");
            tokoDiv.className = "toko tw-flex tw-justify-start tw-rounded-lg gap-2";

            const produkShop = dataP.filter(product => product.shop_id === id_toko && product.check_product === 1);
            if (produkShop.length === 0) {
                return;
            }

            tokoDiv.innerHTML = `
                <div class="tw-flex gap-1">
                    <img src="${shop.shop_photo}" class="tw-rounded-full" width="25px" alt="${shop.shop_name}" />
                    ${shop.shop_name}
                </div>
            `;
            container.appendChild(tokoDiv);

            produkShop.forEach(item => {
                const produkDiv = document.createElement("div");
                produkDiv.className = "tw-flex tw-justify-between tw-items-center gap-3";
                produkDiv.innerHTML = `
                    <div class="tw-flex gap-4" id="product">
                        <div class="product-details tw-flex gap-2">
                            <img src="${item.product_photo}" width="200px" height="200px" alt="${item.product_name}" />
                            <div class="tw-flex tw-flex-col gap-4 p-1">
                                <h2 class="poppins-regular tw-text-[16px]">${item.product_name}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="priceQuantity">
                        ${item.diskon > 0 
                            ? `<p class="prices"><strike>Rp.${(item.product_price * item.quantity).toLocaleString()}</strike></p>
                               <p class="price">Rp.${((item.product_price * item.quantity) * (1 - item.diskon / 100)).toLocaleString()}</p>`
                            : `<p class="price">Rp.${(item.product_price * item.quantity).toLocaleString()}</p>`}
                    </div>
                `;

                container.appendChild(produkDiv);
                const hr = document.createElement("hr");
                container.appendChild(hr);
            });
        });
    }

    fetchData();
});
