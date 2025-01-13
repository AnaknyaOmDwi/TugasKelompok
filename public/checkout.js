async function fetchData() {
    try {
      const [responseS, responseP] = await Promise.all([
        fetch("http://localhost:3000/api/toko/check"),
        fetch("http://localhost:3000/api/products/check"),
      ]);
      const dataS = await responseS.json();
      const dataP = await responseP.json();
  
      if (dataS.data && dataP.data) {
        tampilkanData(dataS.data, dataP.data);
      } else {
        console.error("Error: Data format is incorrect");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Tampilkan data
  function tampilkanData(dataS, dataP) {
    const container = document.getElementById("cart_id");
  
    if (!container) {
      console.error('Error: Element with ID "cart_id" not found.');
      return;
    }
  
    dataS.forEach((shop) => {
      // Buat elemen toko
      const tokoDiv = document.createElement("div");
      tokoDiv.className = "toko tw-flex tw-justify-start tw-rounded-lg gap-2";
  
      tokoDiv.innerHTML = `
        <div class="tw-flex gap-1">
          <img src="${shop.shop_photo}" class="tw-rounded-full" width="25px" alt="${shop.shop_name}" />
          <span>${shop.shop_name}</span>
        </div>
      `;
  
      container.appendChild(tokoDiv);
  
      // Filter produk berdasarkan shop_id
      const produkToko = dataP.filter((product) => product.shop_id === shop.id);
      produkToko.forEach((item) => {
        const produkDiv = document.createElement("div");
        produkDiv.className = "tw-flex tw-justify-between tw-items-center gap-3";
  
        const textReplace = item.description.replace(/[\r\n]+/g, "<br>");
  
        produkDiv.innerHTML = `
          <div class="tw-flex gap-4" id="product">
            <div class="product-details tw-flex gap-2">
              <img src="${item.product_photo}" width="100px"' alt="${item.product_name}" />
              <div class="tw-flex tw-flex-col gap-4 p-1">
                <h2 class="poppins-regular tw-text-[16px]">${item.product_name}</h2>

              </div>
            </div>
          </div>
          <div class="priceQuantity">
            <p class="priceco"><span>${item.quantity} x </span>Rp.${item.product_price.toLocaleString()}</p>
            
          </div>
        `;
        total()
        // // Tambahkan produk ke toko
        container.appendChild(produkDiv);
      });
    });
  }

  async function total() {
    try {
        const response = await fetch(`http://localhost:3000/api/products/check`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const dataP = await response.json();
            let totalsemua = 0; 
            
            dataP.data.forEach(item => {
                if (item.check_product === 1) {  // Hanya hitung produk yang dicentang
                    totalsemua += item.product_price * item.quantity;
                }
            });

            // Simpan total harga ke localStorage
            localStorage.setItem('totalPrice', totalsemua);

            const iniTotal = document.getElementById('total');
            iniTotal.innerHTML = `Rp.${totalsemua.toLocaleString()}`;

            console.log('Total price:', totalsemua);
        } else {
            console.error('Failed to fetch product data.');
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}
  // Panggil fetchData
  fetchData();
  