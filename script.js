// Tableau pour stocker les produits sélectionnés
let selectedProducts = [];

// Fonction pour ajouter un produit à la liste
function addToList(product, quantity) {
    let found = false;
    for (let item of selectedProducts) {
        if (item.product.name === product.name) {
            item.quantity += quantity;
            found = true;
            break;
        }
    }

    if (!found) {
        selectedProducts.push({ product: product, quantity: quantity });
    }
    updateCart();
}

// Fonction pour afficher la liste des produits sélectionnés dans le panier
function updateCart() {
    const listContainer = document.getElementById("selected-products-list");
    const totalPriceElement = document.getElementById("totalPrice");
    listContainer.innerHTML = "";

    let total = 0;
    selectedProducts.forEach(item => {
        const price = parseFloat(item.product.price);
        const amount = (price * item.quantity).toFixed(2);
        total += price * item.quantity;

        const productDiv = document.createElement("div");
        productDiv.className = "cart-item";

        const text = document.createElement("span");
        text.textContent = `${item.product.name} - ${amount} € `;

        const minusButton = document.createElement("button");
        minusButton.textContent = "-";
        minusButton.className = "quantity-button";
        minusButton.addEventListener("click", () => updateQuantity(item.product, -1));

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.className = "quantity-button";
        plusButton.addEventListener("click", () => updateQuantity(item.product, 1));

        const quantitySpan = document.createElement("span");
        quantitySpan.textContent = ` ${item.quantity} `;

        productDiv.appendChild(text);
        productDiv.appendChild(minusButton);
        productDiv.appendChild(quantitySpan);
        productDiv.appendChild(plusButton);

        listContainer.appendChild(productDiv);
    });

    totalPriceElement.textContent = `Total : ${total.toFixed(2)} €`;
}

// Fonction pour modifier la quantité d'un produit
function updateQuantity(product, change) {
    const item = selectedProducts.find(item => item.product.name === product.name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            selectedProducts = selectedProducts.filter(item => item.product.name !== product.name);
        }
        updateCart();
    }
}

// Fonction pour afficher ou masquer le panier
function toggleCart() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.style.display = (cartContainer.style.display === "block") ? "none" : "block";
}

// Fonction pour fermer le panier
function closeCart() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.style.display = "none";
}

// Fonction pour copier les produits sélectionnés
function copySelectedProducts() {
    let result = "Produits sélectionnés :\n";
    let total = 0;

    selectedProducts.forEach(item => {
        const price = parseFloat(item.product.price);
        const amount = (price * item.quantity).toFixed(2);
        total += price * item.quantity;
        result += `${item.quantity}x - ${item.product.name} - ${amount} €\n`;
    });

    result += `\nTotal : ${total.toFixed(2)} €`;

    const textArea = document.createElement("textarea");
    textArea.value = result;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Liste copiée dans le presse-papiers! Vous pouvez maintenant me l'envoyer par sms ainsi que votre adresse pour la livraison");
}

// Fonction pour ajuster les prix selon l'heure
function adjustPrices() {
    const currentHour = new Date().getHours();
    let priceIncrease = 0;

    if (currentHour >= 21 && currentHour < 23) {
        priceIncrease = 0.2;
    } else if (currentHour >= 23 || currentHour < 2) {
        priceIncrease = 0.2;
    }

    function roundToNearestFiveCents(price) {
        return Math.round(price * 20) / 20;
    }

    document.querySelectorAll('.product p').forEach(priceTag => {
        const basePrice = parseFloat(priceTag.textContent.match(/[\d\.]+/));
        if (!isNaN(basePrice)) {
            let newPrice = basePrice * (1 + priceIncrease);
            newPrice = roundToNearestFiveCents(newPrice);
            priceTag.textContent = `Prix : ${newPrice.toFixed(2)} €`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const categories = ["Alcool", "Boissons", "Chips", "Biere", "Formule", "Yaourt", "Cremerie", "Pate", "Plat Préparé", "gateaux"];

    categories.forEach(category => {
        const categoryContainer = document.getElementById(category);
        if (categoryContainer) {
            products
                .filter(product => product.type === category)
                .forEach(product => {
                    const productDiv = document.createElement("div");
                    productDiv.className = "product";
                    productDiv.innerHTML = `
                        <img src="${product.img}" alt="${product.alt}">
                        <h3>${product.name}</h3>
                        <p>Prix : ${product.price} €</p>
                        <button class="boutton-ajouter">Ajouter au panier</button>
                    `;
                    categoryContainer.appendChild(productDiv);

                    productDiv.querySelector(".boutton-ajouter").addEventListener("click", () => {
                        const quantity = 1;
                        addToList(product, quantity);
                    });
                });
        }
    });

    document.getElementById("cartButton").addEventListener("click", toggleCart);
    document.getElementById("closeCart").addEventListener("click", closeCart);

    adjustPrices();
});

document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase(); // Convertir en minuscule pour une recherche insensible à la casse
        const products = document.querySelectorAll(".product");

        products.forEach(product => {
            const productName = product.querySelector("h3").textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = ""; // Afficher le produit s'il correspond
            } else {
                product.style.display = "none"; // Cacher le produit s'il ne correspond pas
            }
        });
    });
});




fetch('status.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);                    }
                    return response.json();
                })
                .then(data => {
                    const stateText = document.getElementById('stateText');
                    stateText.textContent = data.state;
    
                    const voyant = document.getElementById('voyant');
                    voyant.style.backgroundColor = data.color;
                })
                .catch(error => {
                    console.error('Erreur lors du chargement du fichier JSON:', error);
                });



               