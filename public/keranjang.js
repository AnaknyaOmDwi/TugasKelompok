
document.addEventListener('DOMContentLoaded', ()=> {
    const pilihSemua = document.getElementById('check')
    const pilihToko = document.getElementById('check1')
    const pilihSatu = document.getElementById('check2')

    pilihSemua.addEventListener(('change'),()=>{
        storedItems.forEach(item=>{
            item.checkbox= true;
            console.log(item)
            updateLocalStorage()
        })
    })
    
    
    
    const deleteButton = document.querySelector('#deleteButton');
    

    deleteButton.addEventListener('click', function() {
        deleteButton.style.display = 'none';
    });
});

//Keranjang
const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.querySelector('.keranjangs');
const shopElements = {};
const itemMap = {};

function calculateDiscountedPrice(price, discountPercentage) {
    const discountAmount = price * (discountPercentage / 100);
    return (price - discountAmount).toFixed(2);
}

function getOrCreateShopElement(shop) {
    if (!shopElements[shop.id]) {
        const shopElement = document.createElement('div');
        shopElement.classList.add('keranjang');
        shopElement.innerHTML = `
            <div class="nama-toko">
                <input type="checkbox" id="check1">
                <label for="check1" class="ms-2"><h5>${shop.name}</h5></label>
            </div>
        `;
        shopElements[shop.id] = shopElement;
        cartContainer.appendChild(shopElement);
    }
    return shopElements[shop.id];
}

function createItemElement(item, quantity, discountedPrice) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('jdlhrg');
    itemElement.innerHTML = `
        <div class="jdlp1">
            <input type="checkbox" id="check2">
            <img src="${item.images[0]}" alt="">
            <div>
                <p class="mb-2">${item.title}</p>
                <p style="color: grey;">${item.description}</p>
            </div>
        </div>
        <div class="hargap1">
            <h5><del class="original-price">${(item.price * quantity).toFixed(2)}</del></h5>
            <h5 style="color: gray;" class="discounted-price">${(discountedPrice * quantity).toFixed(2)}</h5>
            <div class="plusminus">
                <span class="minus">-</span>
                <span class="num">${quantity}</span>
                <span class="plus">+</span>
            </div>
        </div>
    `;

    const minusButton = itemElement.querySelector('.minus');
    const plusButton = itemElement.querySelector('.plus');

    minusButton.addEventListener('click', () => {
        if (itemMap[item.id].quantity > 1) {
            itemMap[item.id].quantity -= 1;
            updateItemElement(itemMap[item.id]);
            updateLocalStorage();
        }
    });

    plusButton.addEventListener('click', () => {
        itemMap[item.id].quantity += 1;
        updateItemElement(itemMap[item.id]);
        updateLocalStorage();
    });

    return itemElement;
}

function updateItemElement(itemData) {
    const numElement = itemData.element.querySelector('.num');
    const discountedPriceElement = itemData.element.querySelector('.discounted-price');
    const originalPriceElement = itemData.element.querySelector('.original-price');

    numElement.textContent = itemData.quantity;
    discountedPriceElement.textContent = (itemData.discountedPrice * itemData.quantity).toFixed(2);
    originalPriceElement.textContent = (itemData.price * itemData.quantity).toFixed(2);
}

function updateLocalStorage() {
    const updatedCart = Object.values(itemMap).map(itemData => ({
        id: itemData.id,
        shop: itemData.shop,
        title: itemData.title,
        description: itemData.description,
        images: itemData.images,
        price: parseFloat(itemData.price),
        discount_percentage: itemData.discountPercentage,
        quantity: itemData.quantity
    }));
    document.addEventListener("DOMContentLoaded", function () {
        const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartContainer = document.querySelector('.keranjangs');
        const shopElements = {};
        const itemMap = {};
    
        function calculateDiscountedPrice(price, discountPercentage) {
            const discountAmount = price * (discountPercentage / 100);
            return (price - discountAmount).toFixed(2);
        }
    
        function getOrCreateShopElement(shop) {
            if (!shopElements[shop.id]) {
                const shopElement = document.createElement('div');
                shopElement.classList.add('keranjang');
                shopElement.innerHTML = `
                    <div class="nama-toko">
                        <input type="checkbox" class="shop-checkbox" data-shop-id="${shop.id}">
                        <label class="ms-2"><h5>${shop.name}</h5></label>
                    </div>
                `;
                shopElements[shop.id] = shopElement;
                cartContainer.appendChild(shopElement);
    
                const shopCheckbox = shopElement.querySelector('.shop-checkbox');
                shopCheckbox.addEventListener('change', handleShopCheckboxChange);
            }
            return shopElements[shop.id];
        }
    
        function createItemElement(item, quantity, discountedPrice) {
            const itemElement = document.createElement('div');
            itemElement.classList.add('jdlhrg');
            itemElement.innerHTML = `
                <div class="jdlp1">
                    <input type="checkbox" class="item-checkbox" data-item-id="${item.id}">
                    <img src="${item.images[0]}" alt="">
                    <div>
                        <p class="mb-2">${item.title}</p>
                        <p style="color: grey;">${item.description}</p>
                    </div>
                </div>
                <div class="hargap1">
                    <h5><del class="original-price">${(item.price * quantity).toFixed(2)}</del></h5>
                    <h5 style="color: gray;" class="discounted-price">${(discountedPrice * quantity).toFixed(2)}</h5>
                    <div class="plusminus">
                        <span class="minus">-</span>
                        <span class="num">${quantity}</span>
                        <span class="plus">+</span>
                    </div>
                </div>
            `;
    
            const minusButton = itemElement.querySelector('.minus');
            const plusButton = itemElement.querySelector('.plus');
    
            minusButton.addEventListener('click', () => {
                if (itemMap[item.id].quantity > 1) {
                    itemMap[item.id].quantity -= 1;
                    updateItemElement(itemMap[item.id]);
                    updateLocalStorage();
                }
            });
    
            plusButton.addEventListener('click', () => {
                itemMap[item.id].quantity += 1;
                updateItemElement(itemMap[item.id]);
                updateLocalStorage();
            });
    
            return itemElement;
        }
    
        function updateItemElement(itemData) {
            const numElement = itemData.element.querySelector('.num');
            const discountedPriceElement = itemData.element.querySelector('.discounted-price');
            const originalPriceElement = itemData.element.querySelector('.original-price');
    
            numElement.textContent = itemData.quantity;
            discountedPriceElement.textContent = (itemData.discountedPrice * itemData.quantity).toFixed(2);
            originalPriceElement.textContent = (itemData.price * itemData.quantity).toFixed(2);
        }
    
        function updateLocalStorage() {
            const updatedCart = Object.values(itemMap).map(itemData => ({
                id: itemData.id,
                shop: itemData.shop,
                checkbox: itemData.checkbox,
                title: itemData.title,
                description: itemData.description,
                images: itemData.images,
                price: parseFloat(itemData.price),
                discount_percentage: itemData.discountPercentage,
                quantity: itemData.quantity
            }));
    
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    
        function handleShopCheckboxChange(event) {
            const shopId = event.target.dataset.shopId;
            const isChecked = event.target.checked;
            const shopElement = shopElements[shopId];
            const itemCheckboxes = shopElement.querySelectorAll('.item-checkbox');
    
            itemCheckboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
            });
        }
    
        function handleSelectAllChange(event) {
            const isChecked = event.target.checked;
            const allCheckboxes = document.querySelectorAll('.item-checkbox, .shop-checkbox');
    
            allCheckboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
            });
        }
    
        function handleDelete() {
            const selectedItems = document.querySelectorAll('.item-checkbox:checked');
            const selectedShops = document.querySelectorAll('.shop-checkbox:checked');
    
            selectedItems.forEach(checkbox => {
                const itemId = checkbox.dataset.itemId;
                delete itemMap[itemId];
            });
    
            selectedShops.forEach(checkbox => {
                const shopId = checkbox.dataset.shopId;
                const shopElement = shopElements[shopId];
                const itemCheckboxes = shopElement.querySelectorAll('.item-checkbox');
    
                itemCheckboxes.forEach(checkbox => {
                    const itemId = checkbox.dataset.itemId;
                    delete itemMap[itemId];
                });
    
                delete shopElements[shopId];
            });
    
            updateLocalStorage();
            renderCart();
        }
    
        function renderCart() {
            cartContainer.innerHTML = '';
            Object.values(itemMap).forEach(itemData => {
                const shopElement = getOrCreateShopElement(itemData.shop);
                shopElement.appendChild(itemData.element);
            });
            console.log("Cart rendered:", cartContainer.innerHTML);
        }
    
        storedItems.forEach(item => {
            const shopElement = getOrCreateShopElement(item.shop);
            const discountedPrice = calculateDiscountedPrice(item.price, item.discount_percentage);
    
            if (!itemMap[item.id]) {
                const itemElement = createItemElement(item, item.quantity, discountedPrice);
                itemElement.dataset.originalPrice = item.price;
                shopElement.appendChild(itemElement);
    
                itemMap[item.id] = {
                    element: itemElement,
                    quantity: item.quantity,
                    checkbox : item.checkbox,
                    discountedPrice: discountedPrice,
                    id: item.id,
                    shop: item.shop,
                    title: item.title,
                    description: item.description,
                    images: item.images,
                    discountPercentage: item.discount_percentage,
                    price: item.price
                };
                console.log("Item added:", itemMap[item.id]);
            } else {
                itemMap[item.id].quantity += 1;
                updateItemElement(itemMap[item.id]);
                console.log("Item quantity updated:", itemMap[item.id]);
            }
        });
    
        document.querySelector('#check').addEventListener('change', handleSelectAllChange);
        document.querySelector('#deleteButton').addEventListener('click', handleDelete);
    
        renderCart();
    });
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

storedItems.forEach(item => {
    const shopElement = getOrCreateShopElement(item.shop);
    const discountedPrice = calculateDiscountedPrice(item.price, item.discount_percentage);

    if (!itemMap[item.id]) {
        const itemElement = createItemElement(item, item.quantity, discountedPrice);
        itemElement.dataset.originalPrice = item.price;
        shopElement.appendChild(itemElement);

        itemMap[item.id] = {
            element: itemElement,
            quantity: item.quantity,
            discountedPrice: discountedPrice,
            id: item.id,
            shop: item.shop,
            title: item.title,
            description: item.description,
            images: item.images,
            discountPercentage: item.discount_percentage,
            price: item.price
        };
    } else {
        itemMap[item.id].quantity += 1;
        updateItemElement(itemMap[item.id]);
    }
});



