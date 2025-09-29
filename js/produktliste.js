const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const product_list_container = document.querySelector(".category_grid");

document.querySelector(".category_title").textContent = category;


fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&category=${category}`)
    .then((response) => response.json())
    .then(data => showProducts(data));

function showProducts(products) {
    console.log(products);
    products.forEach(element => {
    console.log(element);
     product_list_container.innerHTML +=  `<div class="product_list_container">
     <a href="produkt.html?id=${element.id}">
              <div class="image_container">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" class="${element.soldout && "sold_out_opacity"}" alt="cap" width="100%" />
                <div class="hidden ${element.soldout && "sold_out"}" >Sold out</div>
              </div>
              </a>
              <h3>${element.productdisplayname}</h3>
              <p class="category">${element.category}</p>
              <p class="price ${element.discount && "price_outline"}">${element.price} DKK</p>
              <div class="hidden ${element.discount && "sale"}">
              <p>${element.discount} %</p>
              <p>NOW ${Math.round(element.price - element.price * element.discount / 100)} DKK</p>
              </div>
    </div>`;
    })
}